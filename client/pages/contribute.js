import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/contributepage/HeroSection";
import Info from "../components/contributepage/InfoSection";
import Resources from "../components/contributepage/ResourcesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Resources />
    </>
  );
}
// Tells NextJS this page should use the Header setup in '_app'
Home.Header = Header;
