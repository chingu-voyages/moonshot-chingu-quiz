/*
  This page will load at the url "/quizzes"
*/

import React, { useState, useEffect } from "react";
// import useSWR from "swr"; <-- uncomment when DB is ready
// import apiRoutes from "../api-routes"; <-- uncomment when DB is ready
import { dummyData } from "./dummy-quiz-data";
// import DisplayMessage from "../components/shared/DisplayMessage"; <-- uncomment when DB is ready
import Header from "../components/header/Header";
import QuizTile from "../components/quizSelection/QuizTile";
import TopicSelection from "../components/quizSelection/TopicSelection";
import { QuizzesHeader, TileSection } from "../components/quizSelection/styles";
import { PageHeader } from "../components/shared/styles";

export default function Quizzes() {
  // ** Using dummy data until DB is ready, leave commented out until then
  // Use SWR hook to fetch quizzes (NextJS suggested way of fetching client side)
  // const fetcher = url => fetch(url).then(res => res.json());
  // const {data, error} = useSWR(apiRoutes.getAllQuizzes, fetcher);

  const [subjectsAndTopics, setSubjectsAndTopics] = useState([]);
  const [chosenSubject, setChosenSubject] = useState("All");
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

  // Manually set the options for Subject and Topics until able to do so programmatically
  useEffect(() => {
    setSubjectsAndTopics([
      {
        key: "all",
        title: "All",
        tags: [],
      },
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

  // ** Uncomment when DB is ready
  // Set data returned from SWR in state
  // useEffect(() => {
  //   if (data) {
  //     setAllSubjectQuizzes(data);
  //   }
  // }, [data]);

  // Set Dummy Data into state until DB is ready
  useEffect(() => {
    if (dummyData) {
      setAllSubjectQuizzes(dummyData);
    }
  }, [dummyData]);

  // Handle filtering of quizzes
  useEffect(() => {
    if (chosenSubject === "All") {
      setFilteredQuizzes(allSubjectQuizzes);
    } else if (chosenSubject !== "All" && chosenTopics.length === 0) {
      setFilteredQuizzes(
        allSubjectQuizzes.filter(quiz =>
          quiz.subject.includes(chosenSubject.toLowerCase())
        )
      );
    } else if (chosenSubject !== "All" && chosenTopics.length > 0) {
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
      {/* {
        !!error && (<DisplayMessage message="Error loading quizzes" />)
      }
      {
        !error && !data && (<DisplayMessage message="... Loading Quizzes" />)
      } */}
      {!!filteredQuizzes && (
        <TileSection>
          {filteredQuizzes.map((quiz, i) => (
            <QuizTile
              quizData={quiz}
              key={quiz.id}
              animationDelay={`${100 + i * 50}ms`}
            />
          ))}
        </TileSection>
      )}
    </>
  );
}

// Tells NextJS this page should use the Header setup in '_app'
Quizzes.Header = Header;
