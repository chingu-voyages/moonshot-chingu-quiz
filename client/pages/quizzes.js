/*
  This page will load at the url "/quizzes"
*/

import React from 'react';
import Header from '../components/header/Header.js';
import QuizTile from '../components/quizTiles/QuizTile.js';
import { QuizzesHeader, TileSection } from '../components/quizTiles/styles.js';
import { PageHeader } from '../components/shared/styles.js';

export default function Quizzes() {

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
      <TileSection>
        <QuizTile />
        <QuizTile />
        <QuizTile />
        <QuizTile />
      </TileSection>
    </>
  );
}

//Tells NextJS this page should use the Header setup in '_app'
Quizzes.Header = Header;
