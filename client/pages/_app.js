/*
  This file allows us to add things like a header that will appear on every page.
  'Component' below = the page currently loaded (as in /quizzes).
*/

import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";
import "../styles/reset.css";
import "../styles/globals.css";

const theme = {
  colors: {
    light: "#fff",
    dark: "#000",
    grey: "#333",
    lightGrey: "#ccc",
    midGreen: "#18e28c",
    darkGreen: "#057a55",
    link: "blue",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
