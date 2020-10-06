import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/contributepage/HeroSection";
import Info from "../components/contributepage/InfoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
    </>
  );
}
// Tells NextJS this page should use the Header setup in '_app'
Home.Header = Header;
