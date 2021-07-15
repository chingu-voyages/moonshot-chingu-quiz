/*
  This file allows us to add things like a header that will appear on every page.
  'Component' below = the page currently loaded (as in /quizzes).
*/

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";
import "../styles/reset.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

const darkTheme = {
  colors: {
    light: "#fff",
    dark: "#000",
    grey: "#333",
    lightGrey: "#ccc",
    midGreen: "#18e28c",
    darkGreen: "#057a55",
    link: "inherit",
    backgroundPrimary: "#333",
    backgroundMenu: "#333",
    textPrimary: "#fff",
    textMenu: "#fff",
    greenPrimary: "#18e28c",
  },
};

const lightTheme = {
  colors: {
    light: "#fff",
    dark: "#000",
    grey: "#333",
    lightGrey: "#ccc",
    midGreen: "#18e28c",
    darkGreen: "#057a55",
    link: "inherit",
    backgroundPrimary: "#EBEFF3",
    backgroundMenu: "#fff",
    textPrimary: "#333",
    textMenu: "#057a55",
    greenPrimary: "#057a55",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
