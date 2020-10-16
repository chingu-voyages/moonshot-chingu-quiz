import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/frontpage/HeroSection";
import Info from "../components/frontpage/InfoSection";
import Chingu from "../components/frontpage/ChinguSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Chingu />
    </>
  );
}

// Tells NextJS this page should use the Header setup in '_app'
Home.Header = Header;
