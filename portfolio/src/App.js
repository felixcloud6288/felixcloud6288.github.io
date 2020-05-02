import React from 'react';
import "./css/style.css"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <div>
        <Nav fixed="top"/>
        <Container>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
