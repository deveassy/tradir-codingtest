import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import styled from "styled-components";
// import ReactGA from "react-ga";

const LogoImg = styled.img`
  position: fixed;
  z-index: 80;
  top: 0;
  width: 200px;
  margin: 20px 0 40px;
`;

const Routes = () => {
  return (
    <Router>
      <Link to="/home">
        <LogoImg src="/img/logo.jpg" alt="log-img" />
      </Link>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Redirect path="*" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
