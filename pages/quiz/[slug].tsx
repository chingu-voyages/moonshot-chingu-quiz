/*
  This page will load at the url "/quiz/:slug"
*/

import { useState, useEffect, useContext } from "react";
import {
  AnswersTileSection,
  NextQuestionBtnContainer,
  SubmitQuizBtnContainer,
  AnswerTileContainerLink,
  ContentWrapper,
} from "../../components/quizSingle/styles";
import PageHeader from "../../components/shared/PageHeader";
import QuestionHeader from "../../components/quizSingle/QuestionHeader";
import AnswerTileContainer from "../../components/quizSingle/AnswerTileContainer";
import NextQuestionBtn from "../../components/quizSingle/NextQuestionBtn";
import SubmitQuizBtn from "../../components/quizSingle/SubmitQuizBtn";
import ResultView from "../../components/quizSingle/ResultView";
import db from "../../db";
import { Question } from "../../models/ChinguQuiz/Question";
import { QuizRecord } from "../../models/ChinguQuiz/QuizRecord";
import { Answer } from "../../models/ChinguQuiz/Answer";
import { QuizContext, QuizContextProvider } from "../../contexts/quiz-context";

interface QuizProps {
  quizTitle: string;
  quizQuestions: Question[];
}

// Shuffles an array using Fisher-Yates algorithm
// See: https://www.juniordevelopercentral.com/how-to-shuffle-an-array-in-javascript/
const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

function Quiz({ quizTitle, quizQuestions: originalQuizQuestions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [quizRecord, setQuizRecord] = useState<QuizRecord[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const { timer, setPaused } = useContext(QuizContext);

  const submittedPageHeaderText = "You did it!";

  useEffect(() => {
    const randomizedQuestions = [...originalQuizQuestions];
    randomizedQuestions.forEach(question => {
      const randomizedAnswers = [...question.answers];
      shuffleArray(randomizedAnswers);
      question.answers = randomizedAnswers;
    });
    shuffleArray(randomizedQuestions);
    setQuizQuestions(randomizedQuestions);
  }, []);

  const toggleSelectedAnswer = (answerId: string, questionIndex: number) => {
    setSelectedAnswers([answerId]);
  };

  const nextQuestion = () => {
    updateQuizRecord();
    setSelectedAnswers([]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const submitQuiz = () => {
    updateQuizRecord();
    setQuizSubmitted(true);
    setPaused(true);
  };

  const updateQuizRecord = () => {
    const correctAnswer = quizQuestions[currentQuestionIndex].answers.filter(
      a => a.is_correct === true
    )[0].prompt;
    const userAnswer = quizQuestions[currentQuestionIndex].answers.filter(
      a => a.id === selectedAnswers[0]
    )[0].prompt;
    setQuizRecord(current => [
      ...current,
      {
        question: quizQuestions[currentQuestionIndex].prompt,
        correctAnswer,
        userAnswer,
        correct: correctAnswer === userAnswer,
      },
    ]);
  };

  return (
    <>
      <PageHeader>{quizSubmitted ? `Your Results` : quizTitle}</PageHeader>
      {quizSubmitted && (
        <ResultView quizTitle={quizTitle} quizRecord={quizRecord} />
      )}
      {!quizSubmitted &&
        quizQuestions[currentQuestionIndex] &&
        quizQuestions[currentQuestionIndex].answers && (
          <div>
            <p style={{textAlign: 'center'}}>Elapsed Time: {timer}</p>
            <QuestionHeader
              questionData={quizQuestions[currentQuestionIndex]}
              questionIndex={currentQuestionIndex + 1}
              questionCount={quizQuestions.length}
              animationDelay={30}
            />

            <AnswersTileSection>
              {quizQuestions[currentQuestionIndex].answers.map((answer, i) => (
                <AnswerTileContainerLink
                  key={answer.id}
                  onClick={() => {
                    toggleSelectedAnswer(answer.id, currentQuestionIndex);
                  }}
                >
                  <AnswerTileContainer
                    mark={String.fromCharCode("A".charCodeAt(0) + i)}
                    answerData={answer}
                    selected={selectedAnswers.includes(answer.id)}
                  />
                </AnswerTileContainerLink>
              ))}
            </AnswersTileSection>
            {currentQuestionIndex !== quizQuestions.length - 1 ? (
              <ContentWrapper>
                <NextQuestionBtnContainer>
                  {selectedAnswers.length >= 1 ? (
                    <a
                      tabIndex={0}
                      role="link"
                      onClick={nextQuestion}
                      onKeyDown={nextQuestion}
                    >
                      <NextQuestionBtn />
                    </a>
                  ) : (
                    <NextQuestionBtn disabled />
                  )}
                </NextQuestionBtnContainer>
              </ContentWrapper>
            ) : (
              <ContentWrapper>
                <SubmitQuizBtnContainer>
                  {selectedAnswers.length >= 1 ? (
                    <a
                      tabIndex={0}
                      role="link"
                      onClick={submitQuiz}
                      onKeyDown={submitQuiz}
                    >
                      <SubmitQuizBtn />
                    </a>
                  ) : (
                    <SubmitQuizBtn disabled />
                  )}
                </SubmitQuizBtnContainer>
              </ContentWrapper>
            )}
          </div>
        )}
    </>
  );
}

export default function QuizWithContext({
  quizTitle,
  quizQuestions,
}: QuizProps) {
  return (
    <QuizContextProvider>
      <Quiz quizQuestions={quizQuestions} quizTitle={quizTitle} />
    </QuizContextProvider>
  );
}

export async function getStaticPaths() {
  interface Ids {
    id: string;
  }

  const { rows: ids } = await db.query("SELECT id FROM quiz");
  const paths = ids.map(({ id }: Ids) => ({
    params: {
      slug: id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const {
    rows: [{ title }],
  } = await db.query("SELECT title FROM quiz WHERE id = $1", [slug]);
  const {
    rows: questions,
  } = await db.query("SELECT * FROM question WHERE quiz = $1", [slug]);
  const {
    rows: answers,
  } = await db.query(
    "SELECT id, question, prompt, quiz, is_correct FROM answer WHERE quiz = $1",
    [slug]
  );

  const quizQuestions = questions.map((question: Question) => ({
    id: question.id,
    prompt: question.prompt,
    answers: answers.filter(
      (answer: Answer) => answer.question === question.id
    ),
  }));

  return {
    props: {
      quizTitle: title,
      quizQuestions,
    },
  };
}
