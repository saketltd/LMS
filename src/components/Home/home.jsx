import React from "react";
import Header from "./header";
import Blog from "./fromtheblog";
import LearnigPath from "./learningPaths";
import DesignCourses from "./designCourses";
import Feedback from "./feedback";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Header />
      <Blog />
      <LearnigPath />
      <DesignCourses />
      <Feedback />
      <Footer />
    </>
  );
}
