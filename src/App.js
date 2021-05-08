import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Q1 from './assignments/question1';
import Q2 from './assignments/question2';
import Q3 from './assignments/question3';
import Q4 from './assignments/question4';
import Q5 from './assignments/question5';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/q1">
          <Q1 />
        </Route>
        <Route path="/q2">
          <Q2 />
        </Route>
        <Route path="/q3">
          <Q3 />
        </Route>
        <Route path="/q4">
          <Q4 />
        </Route>
        <Route path="/q5">
          <Q5 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/q1">Question 1</Link>
              </li>
              <li>
                <Link to="/q2">Question 2</Link>
              </li>
              <li>
                <Link to="/q3">Question 3</Link>
              </li>
              <li>
                <Link to="/q4">Question 4</Link>
              </li>
              <li>
                <Link to="/q5">Question 5</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
