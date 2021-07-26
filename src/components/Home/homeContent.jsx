import React from "react";
import DesignCourses from "./designCourses";
import Feedback from "./feedback";
import Blog from "./fromtheblog";
import LearnigPath from "./learningPaths";

export default function Content() {
  return (
    <div className="mdk-header-layout__content page-content">
      <Blog />
      <LearnigPath />
      <DesignCourses />
      <Feedback />
    </div>
  );
}
