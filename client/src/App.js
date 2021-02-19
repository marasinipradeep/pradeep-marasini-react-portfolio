import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import { ProjectsProvider } from "./Components/Utils/ProjectsContext"

import './App.css';

import Home from "./Pages/Home"

function App() {
  return (
    <Router>
      <div>
        <ProjectsProvider>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </ProjectsProvider>
      </div>
    </Router>
  );
}

export default App;
