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
import Cart from "./Pages/Cart";
import styled from "styled-components";

import { Badge } from "antd";
import "antd/dist/antd.css";

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

const CartBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 40px;
  right: 50px;
`;

const CartImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Routes = () => {
  return (
    <Router>
      <Link to="/home">
        <LogoContainer>
          <LogoImg src="/img/logo.jpg" alt="log-img" />
        </LogoContainer>
      </Link>
      <Link to="/cart">
        <CartBox>
          <Badge count={5}>
            <CartImg src="/img/cart.png" alt="cart-img" />
          </Badge>
        </CartBox>
      </Link>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/cart" component={Cart} />
        <Redirect path="*" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
