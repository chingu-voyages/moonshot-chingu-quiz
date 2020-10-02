/*
  This page will load at the url "/quizzes"
*/

import React, { useState } from 'react';
import Header from '../components/header/Header';
import QuizTile from '../components/quizSelection/QuizTile';
import TopicSelection from '../components/quizSelection/TopicSelection';
import { QuizzesHeader, TileSection } from '../components/quizSelection/styles';
import { PageHeader } from '../components/shared/styles';

export default function Quizzes() {
  const [chosenSubject, setChosenSubject] = useState("Programming");
  const [chosenTopics, setChosenTopics] = useState([]);

  /* TODO:
  const [quizArray, setQuizArray] = useState([]);

  Use 'SWR' to fetch quizzes on demand - https://swr.vercel.app/

  Store result in state and map over below to display
  */

  return (
    <>
      <QuizzesHeader>
        <PageHeader>Quizzes</PageHeader>
      </QuizzesHeader>
      <TopicSelection subject={chosenSubject} setChosenSubject={setChosenSubject} chosenTopics={chosenTopics} setChosenTopics={setChosenTopics} />
      <TileSection>
        <QuizTile />
        <QuizTile />
        <QuizTile />
        <QuizTile />
      </TileSection>
    </>
  );
}

// Tells NextJS this page should use the Header setup in '_app'
Quizzes.Header = Header;
