/*
  This page will load at the url "/quiz/:slug"
*/

import React, { useState, useEffect } from "react";
// import useSWR from 'swr';// <-- uncomment when DB is ready
import { useRouter } from "next/router";
// import apiRoutes from '../../api-routes';// <-- uncomment when DB is ready
import { dummyData } from "../dummy-quiz-data";
// import DisplayMessage from '../../components/shared/DisplayMessage';// <-- uncomment when DB is ready
import {
  AnswersTileSection,
  QuizQuestionBtnContainer,
  AnswerTileContainerLink,
  ContentWrapper,
} from "../../components/quizSingle/styles";
import PageHeader from "../../components/shared/PageHeader";
import QuestionHeader from "../../components/quizSingle/QuestionHeader";
import AnswerTileContainer from "../../components/quizSingle/AnswerTileContainer";
import NextQuestionBtn from "../../components/quizSingle/NextQuestionBtn";
import SubmitQuizBtn from "../../components/quizSingle/SubmitQuizBtn";
import PreviousQuizBtn from "../../components/quizSingle/PreviousQuizBtn";

export default function Quiz() {
  const router = useRouter();

  // const fetcher = url => fetch(url).then(res => res.json());// <-- uncomment when DB is ready
  // const {data, error} = useSWR(apiRoutes.getAllQuizzes, fetcher);// <-- uncomment when DB is ready
  const [chosenQuiz, setChosenQuiz] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsCount, setAllQuestionsCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  // Set current quiz from dummyData until DB is ready
  useEffect(() => {
    if (router.query.slug) {
      setChosenQuiz(
        dummyData.filter(quiz => {
          return String(quiz.id) === String(router.query.slug);
        })[0]
      );
    }
  }, [router.query.slug]);

  // ** Uncomment when DB is ready
  // Set data returned from SWR in state
  // useEffect(() => {
  //   if (data) {
  //     setAllSubjectQuizzes(data);
  //   }
  // }, [data]);

  // Set current quiz question to state
  useEffect(() => {
    if (chosenQuiz && chosenQuiz.questions && chosenQuiz.questions.length) {
      setCurrentQuestion(chosenQuiz.questions[currentQuestionIndex]);
      setAllQuestionsCount(chosenQuiz.questions.length);
    }
  }, [chosenQuiz, currentQuestionIndex]);

  // Set current question answers to state
  useEffect(() => {
    if (currentQuestion) {
      setCurrentQuestionAnswers(currentQuestion.answers);
    }
  }, [currentQuestion]);

  const toggleSelectedAnswer = id => {
    if (selectedAnswers.includes(id)) {
      setSelectedAnswers(selected => selected.filter(s => s !== id));
    } else {
      setSelectedAnswers(selected => [...selected, id]);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const previousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <>
      <PageHeader>{chosenQuiz.title}</PageHeader>
      {/* {
        !!error && (<DisplayMessage message="Error loading quiz" />)
      }
      {
        !error && !data && (<DisplayMessage message="... Loading Quiz" />)
      } */}
      {chosenQuiz && currentQuestion && currentQuestionAnswers && (
        <span>
          <QuestionHeader
            questionData={currentQuestion}
            questionIndex={currentQuestionIndex + 1}
            questionCount={allQuestionsCount}
            animationDelay={30}
          />

          <AnswersTileSection>
            {currentQuestionAnswers.map((answer, index) => (
              <AnswerTileContainerLink
                key={answer.id}
                onClick={() => {
                  toggleSelectedAnswer(answer.id);
                }}
              >
                <AnswerTileContainer
                  mark={["A", "B", "C", "D"][index]}
                  selected={selectedAnswers.includes(answer.id)}
                  answerData={answer}
                />
              </AnswerTileContainerLink>
            ))}
          </AnswersTileSection>
          {currentQuestionIndex === 0 && (
            <ContentWrapper>
              <QuizQuestionBtnContainer>
                <a
                  tabIndex={0}
                  role="link"
                  onClick={nextQuestion}
                  onKeyDown={nextQuestion}
                >
                  <NextQuestionBtn />
                </a>
              </QuizQuestionBtnContainer>
            </ContentWrapper>
          )}
          {currentQuestionIndex > 0 &&
            currentQuestionIndex < allQuestionsCount - 1 && (
              <ContentWrapper>
                <QuizQuestionBtnContainer>
                  <a
                    tabIndex={0}
                    role="link"
                    onClick={previousQuestion}
                    onKeyDown={previousQuestion}
                  >
                    <PreviousQuizBtn />
                  </a>
                  <a
                    tabIndex={0}
                    role="link"
                    onClick={nextQuestion}
                    onKeyDown={nextQuestion}
                  >
                    <NextQuestionBtn />
                  </a>
                </QuizQuestionBtnContainer>
              </ContentWrapper>
            )}
          {currentQuestionIndex === allQuestionsCount - 1 && (
            <ContentWrapper>
              <QuizQuestionBtnContainer>
                <a
                  tabIndex={0}
                  role="link"
                  onClick={previousQuestion}
                  onKeyDown={previousQuestion}
                >
                  <PreviousQuizBtn />
                </a>
                <a
                  tabIndex={0}
                  role="link"
                  onClick={nextQuestion}
                  onKeyDown={nextQuestion}
                >
                  <SubmitQuizBtn />
                </a>
              </QuizQuestionBtnContainer>
            </ContentWrapper>
          )}
        </span>
      )}
    </>
  );
}
