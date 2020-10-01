/*
  This page will load at the url "/quizzes"
*/

import React from 'react';
import Header from '../components/header/Header.js';
import QuizTile from '../components/quizTiles/QuizTile.js';
import { QuizzesHeader, TileSection } from '../components/quizTiles/styles.js';
import { PageHeader } from '../components/shared/styles.js';

export default function Quizzes() {
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
