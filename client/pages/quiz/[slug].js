/*
  This page will load at the url "/quiz/:slug"
*/

import React, { useState, useEffect } from "react";
import {
  AnswersTileSection,
  NextQuestionBtnContainer,
  AnswerTileContainerLink,
  ContentWrapper,
} from "../../components/quizSingle/styles";
import PageHeader from "../../components/shared/PageHeader";
import QuestionHeader from "../../components/quizSingle/QuestionHeader";
import AnswerTileContainer from "../../components/quizSingle/AnswerTileContainer";
import NextQuestionBtn from "../../components/quizSingle/NextQuestionBtn";
import db from "../../db";

export default function Quiz({ title, quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsCount, setAllQuestionsCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // Set current quiz question to state
  useEffect(() => {
    if (quiz && quiz.length) {
      setCurrentQuestion(quiz[currentQuestionIndex]);
      setAllQuestionsCount(quiz.length);
    }
  }, [quiz, currentQuestionIndex]);

  // Set current question answers to state
  useEffect(() => {
    if (currentQuestion) {
      setCurrentQuestionAnswers(currentQuestion.answers);
    }
  }, [currentQuestion]);

  const toggleSelectedAnswer = (answerId, questionIndex) => {
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

  return (
    <>
      <PageHeader>{title}</PageHeader>
      {currentQuestion && currentQuestionAnswers && (
        <span>
          <QuestionHeader
            questionData={currentQuestion}
            questionIndex={currentQuestionIndex + 1}
            questionCount={allQuestionsCount}
            animationDelay={30}
          />

          <AnswersTileSection>
            {currentQuestionAnswers.map((answer, i) => (
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
          {currentQuestionIndex < allQuestionsCount - 1 && (
            <ContentWrapper>
              <NextQuestionBtnContainer>
                <a
                  tabIndex={0}
                  role="link"
                  onClick={nextQuestion}
                  onKeyDown={nextQuestion}
                >
                  <NextQuestionBtn />
                </a>
              </NextQuestionBtnContainer>
            </ContentWrapper>
          )}
        </span>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const { rows: ids } = await db.query("SELECT id FROM quiz");
  const paths = ids.map(item => ({
    params: {
      slug: item.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const {
    rows: [{ title }],
  } = await db.query("SELECT title FROM quiz WHERE id = $1", [slug]);
  const {
    rows: questions,
  } = await db.query("SELECT * FROM question WHERE quiz = $1", [slug]);
  const {
    rows: answers,
  } = await db.query(
    "SELECT id, question, prompt, quiz FROM answer WHERE quiz = $1",
    [slug]
  );

  const quiz = questions.map(question => ({
    id: question.id,
    prompt: question.prompt,
    answers: answers.filter(answer => answer.question === question.id),
  }));

  return {
    props: {
      title,
      quiz,
    },
  };
}
