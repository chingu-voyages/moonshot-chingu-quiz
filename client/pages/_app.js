/*
  This file allows us to add things like a header that will appear on every page.
  'Component' below = the page currently loaded (as in /quizzes).
*/

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout";
import "../styles/reset.css";
import "../styles/globals.css";

const darkTheme = {
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

const lightTheme = {
  colors: {
    light: "#000",
    dark: "#fff",
    grey: "#ccc",
    lightGrey: "#333",
    midGreen: "#057a55",
    darkGreen: "#18e28c",
    link: "blue",
  },
};

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout
        toggleTheme={toggleTheme}
        themeLogo={theme === "light" ? "./moon.png" : "./sun.png"}
      >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
