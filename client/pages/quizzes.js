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
  /* TODO:
  Use 'SWR' to fetch quizzes - https://swr.vercel.app/
  Make initial fetch return all quizzes and randomize;
  */

  const [subjectsAndTopics, setSubjectsAndTopics] = useState([]);
  const [chosenSubject, setChosenSubject] = useState("Random");
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
    // Only includes quiz if all quiz tags are matched to topic selection in the UI
    return totalMatches === quizTagArray.length;
  };

  // Dummy data until back end hooked in
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
        tags: ["Team Dynamics", "workflow"],
      },
    ]);

    setAllSubjectQuizzes([
      {
        title: "React Example",
        subject: ["programming"],
        description: "A quiz covering general React knowledge.",
        tags: ["react"],
      },
      {
        title: "React and Javascript Example",
        subject: ["programming"],
        description:
          "A quiz covering general JavaScript knowledge as well as some React.",
        tags: ["javascript", "react"],
      },
      {
        title: "Importance of colors in UX",
        subject: ["ux"],
        description: "Review the impace color can have on User Experience.",
        tags: ["color"],
      },
      {
        title: "Workflow in the tech business",
        subject: ["interview"],
        description: "Cover best practices in team workflow environments.",
        tags: ["workflow"],
      },
    ]);

    setFilteredTopicsArray([
      {
        title: "React Example",
        subject: ["programming"],
        description: "A quiz covering general React knowledge.",
        tags: ["react"],
      },
      {
        title: "React and Javascript Example",
        subject: ["programming"],
        description:
          "A quiz covering general JavaScript knowledge as well as some React.",
        tags: ["javascript", "react"],
      },
      {
        title: "Importance of colors in UX",
        subject: ["ux"],
        description: "Review the impace color can have on User Experience.",
        tags: ["color"],
      },
      {
        title: "Workflow in the tech business",
        subject: ["interview"],
        description: "Cover best practices in team workflow environments.",
        tags: ["workflow"],
      },
    ]);
  }, []);

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
        subjectsAndTopics={subjectsAndTopics}
        chosenSubject={chosenSubject}
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
