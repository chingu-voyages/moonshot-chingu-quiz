import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/aboutUs/HeroSection";
import Info from "../components/aboutUs/InfoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
    </>
  );
}
// Tells NextJS this page should use the About setup in '_app'
Home.Header = Header;
