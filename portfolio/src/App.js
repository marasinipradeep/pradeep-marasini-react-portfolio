import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './App.css';

import Home from "./Components/Pages/Home"

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
