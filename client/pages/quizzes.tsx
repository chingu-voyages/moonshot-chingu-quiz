/*
  This page will load at the url "/quizzes"
*/

import React, { useState, useEffect } from "react";
// import useSWR from "swr"; <-- uncomment when DB is ready
// import apiRoutes from "../api-routes"; <-- uncomment when DB is ready
// import { dummyData } from "~/data/dummy-quiz-data";
// import DisplayMessage from "../components/shared/DisplayMessage"; <-- uncomment when DB is ready
import QuizTile from "../components/quizSelection/QuizTile";
import TopicSelection from "../components/quizSelection/TopicSelection";
import { TileSection } from "~/components/quizSelection/styles";
import PageHeader from "../components/shared/PageHeader";
import type { ChinguQuiz, UI } from "~/models";
import db from "../db";

export default function Quizzes({
  quizzes,
  subjectsAndTopics,
}: {
  quizzes: ChinguQuiz.Quiz[];
  subjectsAndTopics: UI.Quizzes.SubjectAndTopic[];
}) {
  // ** Using dummy data until DB is ready, leave commented out until then
  // Use SWR hook to fetch quizzes (NextJS suggested way of fetching client side)
  // const fetcher = url => fetch(url).then(res => res.json());
  // const {data, error} = useSWR(apiRoutes.getAllQuizzes, fetcher);

  // const [subjectsAndTopics, setSubjectsAndTopics] = useState<
  //   UI.Quizzes.SubjectAndTopic[]
  // >([]);
  const [chosenSubject, setChosenSubject] = useState<string>("All");
  const [chosenTopics, setChosenTopics] = useState<string[]>([]);
  const [allSubjectQuizzes, setAllSubjectQuizzes] = useState<ChinguQuiz.Quiz[]>(
    []
  );
  const [filteredQuizzes, setFilteredQuizzes] = useState<ChinguQuiz.Quiz[]>([]);

  const subjectFilterCallback = (quizTagArray: string[]) => {
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
  // useEffect(() => {
  //   setSubjectsAndTopics([
  //     {
  //       key: "all",
  //       title: "All",
  //       tags: [],
  //     },
  //     {
  //       key: "programming",
  //       title: "Programming",
  //       tags: ["html", "css", "javascript", "react"],
  //     },
  //     {
  //       key: "ux",
  //       title: "UX",
  //       tags: ["color", "buttons", "imagery"],
  //     },
  //     {
  //       key: "interview",
  //       title: "Interview",
  //       tags: ["team dynamics", "workflow"],
  //     },
  //   ]);
  // }, []);

  // ** Uncomment when DB is ready
  // Set data returned from SWR in state
  // useEffect(() => {
  //   if (data) {
  //     setAllSubjectQuizzes(data);
  //   }
  // }, [data]);

  // Set Dummy Data into state until DB is ready
  useEffect(() => {
    if (quizzes) {
      setAllSubjectQuizzes(quizzes);
    }
  }, [quizzes]);

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
      <PageHeader>Quizzes</PageHeader>
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

export async function getStaticProps() {
  interface Subject {
    id: string;
    title: string;
  }
  interface Tag {
    id: string;
    title: string;
  }

  const { rows: quizzes } = await db.query("SELECT * FROM quiz");
  const { rows: subjects } = await db.query("SELECT * FROM subject");
  const { rows: tags } = await db.query("SELECT * FROM tag");

  const subjectsMap: {
    [index: string]: string;
  } = {};
  subjects.forEach((subject: Subject) => {
    subjectsMap[subject.id] = subject.title;
  });
  const tagsMap: {
    [index: string]: string;
  } = {};
  tags.forEach((tag: Tag) => {
    tagsMap[tag.id] = tag.title;
  });
  console.log(subjectsMap);
  console.log(tagsMap);
  const subjectsAndTopics: UI.Quizzes.SubjectAndTopic[] = [];
  quizzes.forEach((quiz: ChinguQuiz.Quiz) => {
    const { subject, tags } = quiz;
    const searchResult = subjectsAndTopics.find(
      item => item.title === subjectsMap[subject]
    );
    if (searchResult) {
      tags.forEach((id: string | number) => {
        searchResult.tags.push(tagsMap[id]);
      });
    } else {
      subjectsAndTopics.push({
        key: subjectsMap[subject],
        title: subjectsMap[subject],
        tags: tags.map((id: string | number) => tagsMap[id]),
      });
    }
  });

  return {
    props: {
      quizzes: quizzes.map((quiz: ChinguQuiz.Quiz) => ({
        ...quiz,
        subject: subjectsMap[quiz.subject],
        tag: quiz.tags.map(id => tagsMap[id]),
      })),
      subjectsAndTopics,
    },
  };
}
