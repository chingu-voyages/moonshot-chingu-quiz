/*
  This page will load at the url "/quizzes"
*/

import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import QuizTile from "../components/quizSelection/QuizTile";
import TopicSelection from "../components/quizSelection/TopicSelection";
import { QuizzesHeader, TileSection } from "../components/quizSelection/styles";
import { PageHeader } from "../components/shared/styles";

export default function Quizzes() {
  const [chosenSubject, setChosenSubject] = useState("Programming");
  const [chosenTopics, setChosenTopics] = useState([]);
  const [allSubjectQuizzes, setAllSubjectQuizzes] = useState([]);
  const [filteredTopicsArray, setFilteredTopicsArray] = useState([]);

  const subjectFilterCallback = quizTagArray => {
    let totalMatches = 0;
    for (let i = 0; i < quizTagArray.length; i += 1) {
      if (chosenTopics.indexOf(quizTagArray[i]) >= 0) {
        totalMatches += 1;
      }
    }
    return totalMatches === quizTagArray.length;
  };

  useEffect(() => {
    setAllSubjectQuizzes([
      {
        title: "Css Example",
        subject: ["programming"],
        description: "A quiz covering general CSS knowledge.",
        tags: ["css"],
      },
      {
        title: "JavaScript Example",
        subject: ["programming"],
        description: "A quiz covering general JavaScript knowledge.",
        tags: ["javascript"],
      },
      {
        title: "JavaScript/CSS combo",
        subject: ["programming"],
        description: "A quiz covering JavaScript and CSS knowledge.",
        tags: ["javascript", "css"],
      },
    ]);

    setFilteredTopicsArray([
      {
        title: "Css Example",
        subject: ["programming"],
        description: "A quiz covering general CSS knowledge.",
        tags: ["css"],
      },
      {
        title: "JavaScript Example",
        subject: ["programming"],
        description: "A quiz covering general JavaScript knowledge.",
        tags: ["javascript"],
      },
      {
        title: "JavaScript/CSS combo",
        subject: ["programming"],
        description: "A quiz covering JavaScript and CSS knowledge.",
        tags: ["javascript", "css"],
      },
    ]);
  }, []);
  /* TODO:
  Use 'SWR' to fetch quizzes on demand - https://swr.vercel.app/
  */

  useEffect(() => {
    if (chosenTopics.length > 0) {
      setFilteredTopicsArray(
        allSubjectQuizzes.filter(quiz => subjectFilterCallback(quiz.tags))
      );
    } else if (chosenSubject === "Programming") {
      setFilteredTopicsArray(allSubjectQuizzes);
    } else {
      setFilteredTopicsArray([]);
    }
  }, [chosenTopics, allSubjectQuizzes, chosenSubject]);

  return (
    <>
      <QuizzesHeader>
        <PageHeader>Quizzes</PageHeader>
      </QuizzesHeader>
      <TopicSelection
        subject={chosenSubject}
        setChosenSubject={setChosenSubject}
        chosenTopics={chosenTopics}
        setChosenTopics={setChosenTopics}
      />
      <TileSection>
        {filteredTopicsArray.map(quiz => (
          <QuizTile quizData={quiz} key={quiz.title} />
        ))}
      </TileSection>
    </>
  );
}

// Tells NextJS this page should use the Header setup in '_app'
Quizzes.Header = Header;
