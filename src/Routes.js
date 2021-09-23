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

const LogoContainer = styled.header`
  position: fixed;
  z-index: 80;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 20px 0;
`;

const LogoImg = styled.img`
  width: 300px;
`;

const Routes = () => {
  return (
    <Router>
      <Link to="/home">
        <LogoContainer>
          <LogoImg src="/img/logo.jpg" alt="log-img" />
        </LogoContainer>
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
