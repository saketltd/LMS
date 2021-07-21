import Home from "./components/Home/home";
import Courses from "./components/Courses/courses";
import Admin from "./components/Admin/admin";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </main>
  );
}

export default App;
