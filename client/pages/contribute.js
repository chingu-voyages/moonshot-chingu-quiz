import React from "react";
import PageHeader from "../components/shared/PageHeader";
import Info from "../components/contributepage/InfoSection";
import Resources from "../components/contributepage/ResourcesSection";

export default function Home() {
  return (
    <>
      <PageHeader>How To Contribute</PageHeader>
      <Info />
      <Resources />
    </>
  );
}
