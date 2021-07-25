import Home from "./components/Home/home";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Courses from "./components/Courses/courses";
import Admin from "./components/Admin/admin";

function App() {
  return (
    <main>
      <Helmet>
        <script src="vendor/jquery.min.js"></script>
        <script src="vendor/popper.min.js"></script>
        <script src="vendor/bootstrap.min.js"></script>
        <script src="vendor/perfect-scrollbar.min.js"></script>
        <script src="vendor/dom-factory.js"></script>
        <script src="vendor/material-design-kit.js"></script>
        <script src="js/app.js"></script>
        <script src="js/preloader.js"></script>
        <script src="js/settings.js"></script>
        <script src="vendor/moment.min.js"></script>
        <script src="vendor/moment-range.js"></script>
        <script src="vendor/Chart.min.js"></script>
        <script src="js/chartjs-rounded-bar.js"></script>
        <script src="js/chartjs.js"></script>
        <script src="js/page.instructor-dashboard.js"></script>
        <script src="vendor/list.min.js"></script>
        <script src="js/list.js"></script>
      </Helmet>
      <Switch>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </main>
  );
}

export default App;
