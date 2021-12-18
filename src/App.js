import "../styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./html/Main.js";
import Lessons from "./html/Lessons/Lessons.js";
import One from "./html/Lesson_One/One.js";
import Two from "./html/Lesson_Two/Two.js";
import Three from "./html/Lesson_Three/Three.js";
import Four from "./html/Lesson_Four/Four.js";
import Five from "./html/Lesson_Five/Five.js";

import { Link } from "react-router-dom";

import HTML5 from "./html/Photos/HTML5.png";

export default function App() {
  return (
    <Router>
      <header>
        <div class="navigation">
          <ul>
            <li class="logo">
              <img src={HTML5} alt="HTML5" width="45" />
            </li>
            <li class="selected">
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/html/Lessons/Lessons.html">LESSONS</Link>
            </li>
            <li>
              <Link to="/html/Lesson_One/One.html">LESSON ONE</Link>
            </li>
            <li>
              <Link to="/html/Lesson_Two/Two.html">LESSON TWO</Link>
            </li>
            <li>
              <Link to="/html/Lesson_Three/Three.html">LESSON THREE</Link>
            </li>
            <li>
              <Link to="/html/Lesson_Four/Four.html">LESSON FOUR</Link>
            </li>
            <li>
              <Link to="/html/Lesson_Five/Five.html">LESSON FIVE</Link>
            </li>
          </ul>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/html/Lessons/Lessons.html">
          <Lessons />
        </Route>

        <Route exact path="/html/Lesson_One/One.html">
          <One />
        </Route>

        <Route exact path="/html/Lesson_Two/Two.html">
          <Two />
        </Route>

        <Route exact path="/html/Lesson_Three/Three.html">
          <Three />
        </Route>

        <Route exact path="/html/Lesson_Four/Four.html">
          <Four />
        </Route>

        <Route exact path="/html/Lesson_Five/Five.html">
          <Five />
        </Route>
      </Switch>
      <footer>&copy; 2021, Basic of HTML for Kids</footer>
    </Router>
  );
}
