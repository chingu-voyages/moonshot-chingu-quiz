/*
  This file allows us to add things like a header that will appear on every page.
  'Component' below = the page currently loaded (as in /quizzes).
*/

import React from "react";
import "../styles/reset.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Header = Component.Header ? Component.Header : React.Fragment;

  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
