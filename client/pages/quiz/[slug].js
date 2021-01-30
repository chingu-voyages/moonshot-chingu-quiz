/*
  This page will load at the url "/quiz/:slug"
*/

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

export default function Quiz() {
  const router = useRouter();
  const [allSubjectQuizzes] = useState([]);
  const [chosenQuiz, setChosenQuiz] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsCount, setAllQuestionsCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // When id is selected and quizzes are loaded,
  // find quiz by id and save it to state
  useEffect(() => {
    if (router.query.slug) {
      const filtered = allSubjectQuizzes.filter(quiz => {
        return String(quiz.id) === String(router.query.slug);
      });
      const filteredQuiz = filtered.length ? filtered[0] : {};
      setChosenQuiz(filteredQuiz);
    }
  }, [router.query.slug, allSubjectQuizzes]);

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

  const toggleSelectedAnswer = answer => {
    // Temporarily save the clicked node
    let node = answer.target;

    // Find the main answer container
    while (node.classList.toString().indexOf("Container") < 0) {
      node = node.parentNode;
    }

    const clickedAnswerMark = node.firstChild.innerText;
    let clickedAnswer = null;
    // Find the clicked answer object by its mark
    currentQuestionAnswers.forEach((_answer, index) => {
      const mark = String.fromCharCode("A".charCodeAt(0) + index);
      if (mark === clickedAnswerMark) clickedAnswer = _answer;
    });

    // Clone state object
    const selectedAnswersTmp = { ...selectedAnswers };

    // Get selected answer array
    const selectedAnswersArray = selectedAnswersTmp[currentQuestionIndex];

    // Set / remove answer
    if (!selectedAnswersArray) {
      selectedAnswersTmp[currentQuestionIndex] = [clickedAnswer.id];
    } else if (selectedAnswersArray.find(id => id === clickedAnswer.id)) {
      selectedAnswersTmp[currentQuestionIndex].splice(
        selectedAnswersArray.indexOf(clickedAnswer.id),
        1
      );
    } else {
      selectedAnswersArray.push(clickedAnswer.id);
    }

    // Save state
    setSelectedAnswers(selectedAnswersTmp);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <>
      <PageHeader>{chosenQuiz.title}</PageHeader>
      {chosenQuiz && currentQuestion && currentQuestionAnswers && (
        <span>
          <QuestionHeader
            questionData={currentQuestion}
            questionIndex={currentQuestionIndex + 1}
            questionCount={allQuestionsCount}
            animationDelay={30}
          />

          <AnswersTileSection>
            {currentQuestionAnswers.map((answer, i) => (
              <AnswerTileContainerLink onClick={toggleSelectedAnswer}>
                <AnswerTileContainer
                  mark={String.fromCharCode("A".charCodeAt(0) + i)}
                  answerData={answer}
                  selected={Object.values(selectedAnswers).some(v => {
                    return v.find(id => id === answer.id);
                  })}
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
