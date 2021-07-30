import Home from "./components/Home/home";
import { Switch, Route } from "react-router-dom";
import Courses from "./components/Courses/courses";
import Admin from "./components/Admin/admin";
import useScript from "./hooks/useScript";
import Login from "./components/Login/login";
import Signup from "./components/Login/signup";
import Blog from "./components/Blog/blog";
import StudentCourse from "./components/StudentCourse/StudentCourse";
import About from "./components/AboutUs/about";
import Contact from "./components/ContactUs/contact";
import Career from "./components/Careers/career";
import Student from "./components/Student/studentPanel";
import Module from "./components/Student/Module";
import Grades from "./components/Student/Grades";
import Video from "./components/Student/Video";
import Quiz from "./components/Student/Quiz";
import Profile from "./components/Student/Profile";
import Help from "./components/Student/Help";
import CourseInfo from "./components/Student/CourseInfo";

const MyComponent = (props) => {
  useScript("vendor/jquery.min.js");
  useScript("vendor/popper.min.js");
  useScript("vendor/bootstrap.min.js");
  useScript("vendor/perfect-scrollbar.min.js");
  useScript("vendor/dom-factory.js");
  useScript("vendor/material-design-kit.js");
  useScript("js/app.js");
  useScript("js/preloader.js");
  useScript("js/settings.js");
  useScript("vendor/moment.min.js");
  useScript("vendor/moment-range.js");
  useScript("vendor/Chart.min.js");
  useScript("js/chartjs-rounded-bar.js");
  useScript("js/chartjs.js");
  useScript("js/page.instructor-dashboard.js");
  useScript("vendor/list.min.js");
  useScript("js/list.js");
};

function App() {
  return (
    <>
      <Switch>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/career" component={Career}></Route>
        <Route path="/student" component={Student}></Route>
        <Route path="/module" component={Module}></Route>
        <Route path="/grades" component={Grades}></Route>
        <Route path="/video" component={Video}></Route>
        <Route path="/quiz" component={Quiz}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/help" component={Help}></Route>
        <Route path="/courseInfo" component={CourseInfo}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/studentCourse" component={StudentCourse}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      {MyComponent()}
    </>
  );
}

export default App;
