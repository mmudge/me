import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/Home/index";
import About from "../components/About/index";
import Projects from "../components/Projects/index";

export default () => {
  return (
    <Router>
      <Link
        to="/"
        className=""
        role="button"
      >
        Home
      </Link>
      <Link
        to="/about"
        className=""
        role="button"
      >
        About
      </Link>
      <Link
        to="/projects"
        className=""
        role="button"
      >
        Projects
      </Link>






      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
      </Switch>
    </Router>
  )
}
