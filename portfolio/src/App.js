import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './App.css';

import Home from "./Components/Pages/Home"
import Projects from "./Components/Pages/Projects"

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
