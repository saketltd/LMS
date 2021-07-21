import React from "react";
import DesignCourses from "./designCourses";
import Development from "./developemntCourses";
import Header from "../../containers/Header";
import Polular from "./popularCourses";

export default function Courses() {
  return (
    <>
      <Header />
      <Polular />
      <Development />
      <DesignCourses />
    </>
  );
}
