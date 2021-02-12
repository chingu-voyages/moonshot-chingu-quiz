/*
  This page will load at the url "/quiz/:slug"
*/

import React, { useState } from "react";
import {
  AnswersTileSection,
  NextQuestionBtnContainer,
  SubmitQuizBtnContainer,
  AnswerTileContainerLink,
  ContentWrapper,
} from "~/components/quizSingle/styles";
import PageHeader from "../../components/shared/PageHeader";
import QuestionHeader from "../../components/quizSingle/QuestionHeader";
import AnswerTileContainer from "../../components/quizSingle/AnswerTileContainer";
import NextQuestionBtn from "../../components/quizSingle/NextQuestionBtn";
import SubmitQuizBtn from "../../components/quizSingle/SubmitQuizBtn";
import db from "../../db";
import { Question } from "~/models/ChinguQuiz/Question";
import { Answer } from "~/models/ChinguQuiz/Answer";

interface QuizProps {
  quizTitle: string;
  quizQuestions: Question[];
}

export default function Quiz({ quizTitle, quizQuestions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const submittedPageHeaderText = "You did it!";

  const toggleSelectedAnswer = (answerId: string, questionIndex: number) => {
    if (selectedAnswers.length && questionIndex <= selectedAnswers.length - 1) {
      return setSelectedAnswers(
        selectedAnswers.map((currentAnswerId, index) => {
          if (questionIndex === index) {
            return answerId;
          }
          return currentAnswerId;
        })
      );
    }
    if (selectedAnswers.length && questionIndex > selectedAnswers.length - 1) {
      return setSelectedAnswers(selectedAnswers.concat([answerId]));
    }
    return setSelectedAnswers([answerId]);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
  };

  return (
    <>
      <PageHeader>
        {quizSubmitted ? submittedPageHeaderText : quizTitle}
      </PageHeader>
      {quizSubmitted && <div>Hurrrayyyyy</div>}
      {!quizSubmitted &&
        quizQuestions[currentQuestionIndex] &&
        quizQuestions[currentQuestionIndex].answers && (
          <span>
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
                  {currentQuestionIndex === selectedAnswers.length - 1 ? (
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
                  {currentQuestionIndex === selectedAnswers.length - 1 ? (
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
          </span>
        )}
    </>
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
