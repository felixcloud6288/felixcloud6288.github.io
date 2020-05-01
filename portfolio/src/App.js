import React from 'react';
import "./css/style.css"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./pages/home"
function App() {
  return (
    <Router>
      <div>
        <Nav fixed="top"/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
