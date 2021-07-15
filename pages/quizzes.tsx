/*
  This page will load at the url "/quizzes"
*/

import React, { useState, useEffect } from "react";
import QuizTile from "../components/quizSelection/QuizTile";
import TopicSelection from "../components/quizSelection/TopicSelection";
import { TileSection } from "../components/quizSelection/styles";
import PageHeader from "../components/shared/PageHeader";
import type { ChinguQuiz, UI } from "../models";
import db from "../db";

export default function Quizzes({
  quizzes,
  subjectsAndTopics,
}: {
  quizzes: ChinguQuiz.Quiz[];
  subjectsAndTopics: UI.Quizzes.SubjectAndTopic[];
}) {
  const [chosenSubject, setChosenSubject] = useState<string>("All");
  const [chosenTopics, setChosenTopics] = useState<string[]>([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<ChinguQuiz.Quiz[]>([]);

  const subjectFilterCallback = (quizTagArray: string[]) => {
    let totalMatches = 0;
    for (let i = 0; i < quizTagArray.length; i += 1) {
      if (chosenTopics.indexOf(quizTagArray[i]) >= 0) {
        totalMatches += 1;
      }
    }
    // Only includes quiz if all quiz tag are matched to topic selection in the UI
    return totalMatches === quizTagArray.length;
  };

  // Handle filtering of quizzes
  useEffect(() => {
    if (chosenSubject === "All") {
      setFilteredQuizzes(quizzes);
    } else if (chosenSubject !== "All" && chosenTopics.length === 0) {
      setFilteredQuizzes(
        quizzes.filter(quiz =>
          quiz.subject.includes(chosenSubject.toLowerCase())
        )
      );
    } else if (chosenSubject !== "All" && chosenTopics.length > 0) {
      setFilteredQuizzes(
        quizzes
          .filter(quiz => quiz.subject.includes(chosenSubject.toLowerCase()))
          .filter(quiz => subjectFilterCallback(quiz.tag))
      );
    }
  }, [chosenTopics, quizzes, chosenSubject]);

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
  const { rows: tag } = await db.query("SELECT * FROM tag");

  const subjectsMap: {
    [index: string]: string;
  } = {};
  subjects.forEach((subject: Subject) => {
    subjectsMap[subject.id] = subject.title;
  });
  const tagMap: {
    [index: string]: string;
  } = {};
  tag.forEach((tag: Tag) => {
    tagMap[tag.id] = tag.title;
  });
  const subjectsAndTopics: UI.Quizzes.SubjectAndTopic[] = [];
  quizzes.forEach((quiz: ChinguQuiz.Quiz) => {
    const { subject, tag } = quiz;
    const searchResult = subjectsAndTopics.find(
      item => item.title === subjectsMap[subject]
    );
    if (searchResult) {
      tag.forEach((id: string | number) => {
        searchResult.tag.push(tagMap[id]);
      });
    } else {
      subjectsAndTopics.push({
        key: subjectsMap[subject],
        title: subjectsMap[subject],
        tag: tag.map((id: string | number) => tagMap[id]),
      });
    }
  });

  return {
    props: {
      quizzes: quizzes.map((quiz: ChinguQuiz.Quiz) => ({
        ...quiz,
        subject: subjectsMap[quiz.subject],
        tag: quiz.tag.map(id => tagMap[id]),
      })),
      subjectsAndTopics,
    },
  };
}
