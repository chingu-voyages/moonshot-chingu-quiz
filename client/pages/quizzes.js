/*
  This page will load at the url "/quizzes"
*/

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import apiRoutes from "../api-routes";
import DisplayMessage from "../components/shared/DisplayMessage";
import Header from "../components/header/Header";
import QuizTile from "../components/quizSelection/QuizTile";
import TopicSelection from "../components/quizSelection/TopicSelection";
import { QuizzesHeader, TileSection } from "../components/quizSelection/styles";
import { PageHeader } from "../components/shared/styles";

export default function Quizzes() {
  // Use SWR hook to fetch quizzes
  const fetcher = url => fetch(url).then(res => res.json());
  const { data, error } = useSWR(apiRoutes.getAllQuizzes, fetcher);

  const [subjectsAndTopics, setSubjectsAndTopics] = useState([]);
  const [chosenSubject, setChosenSubject] = useState("Random");
  const [chosenTopics, setChosenTopics] = useState([]);
  const [allSubjectQuizzes, setAllSubjectQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);

  const subjectFilterCallback = quizTagArray => {
    let totalMatches = 0;
    for (let i = 0; i < quizTagArray.length; i += 1) {
      if (chosenTopics.indexOf(quizTagArray[i]) >= 0) {
        totalMatches += 1;
      }
    }
    // Only includes quiz if all quiz tags are matched to topic selection in the UI
    return totalMatches === quizTagArray.length;
  };

  useEffect(() => {
    setSubjectsAndTopics([
      {
        key: "programming",
        title: "Programming",
        tags: ["html", "css", "javascript", "react"],
      },
      {
        key: "ux",
        title: "UX",
        tags: ["color", "buttons", "imagery"],
      },
      {
        key: "interview",
        title: "Interview",
        tags: ["team dynamics", "workflow"],
      },
    ]);
  }, []);

  useEffect(() => {
    if (data) {
      setAllSubjectQuizzes(data);
    }
  }, [data]);

  useEffect(() => {
    if (chosenSubject === "Random") {
      setFilteredQuizzes(allSubjectQuizzes);
    } else if (chosenSubject !== "Random" && chosenTopics.length === 0) {
      setFilteredQuizzes(
        allSubjectQuizzes.filter(quiz =>
          quiz.subject.includes(chosenSubject.toLowerCase())
        )
      );
    } else if (chosenSubject !== "Random" && chosenTopics.length > 0) {
      setFilteredQuizzes(
        allSubjectQuizzes
          .filter(quiz => quiz.subject.includes(chosenSubject.toLowerCase()))
          .filter(quiz => subjectFilterCallback(quiz.tags))
      );
    }
  }, [chosenTopics, allSubjectQuizzes, chosenSubject]);

  return (
    <>
      <QuizzesHeader>
        <PageHeader>Quizzes</PageHeader>
      </QuizzesHeader>
      <TopicSelection
        subjectsAndTopics={subjectsAndTopics}
        chosenSubject={chosenSubject}
        setChosenSubject={setChosenSubject}
        chosenTopics={chosenTopics}
        setChosenTopics={setChosenTopics}
      />
      {!!error && <DisplayMessage message="Error loading quizzes" />}
      {!error && !data && <DisplayMessage message="... Loading Quizzes" />}
      {!!data && (
        <TileSection>
          {filteredQuizzes.map(quiz => (
            <QuizTile quizData={quiz} key={quiz.id} />
          ))}
        </TileSection>
      )}
    </>
  );
}

// Tells NextJS this page should use the Header setup in '_app'
Quizzes.Header = Header;
