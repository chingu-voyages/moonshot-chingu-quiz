/*
  This page will load at the url "/quizzes"
*/

import Header from "../components/header/Header.js";

export default function Quizzes() {
  return (
    <>
      <h1>Choose a Quiz</h1>
      <h5>This is a second page where the quiz options can be laid out.</h5>
    </>
  );
}

//Tells NextJS this page should use the Header setup in '_app'
Quizzes.Header = Header;
