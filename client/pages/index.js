import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/frontpage/HeroSection";

export default function Home() {
  return <Hero />;
}

// Tells NextJS this page should use the Header setup in '_app'
Home.Header = Header;
