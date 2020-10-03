/*
  This file is the landing page
*/

import React from "react";
import Header from "../components/header/Header";


export default function Home() {
  return (
    <>
      <h1>Welcome to The Chingu Quiz App!</h1>
      <h5>
        This is the home page ....
        <br />
        Perhaps this page could be a landing page with fun graphics and a brief
        explanation of what this app does.
      </h5>
    </>
  );
}

// Tells NextJS this page should use the Header setup in '_app'
Home.Header = Header;
