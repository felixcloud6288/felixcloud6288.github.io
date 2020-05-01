import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
function App() {
  return (
    <Router>
      <div>
        <Nav fixed="top"/>
        <Switch>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
