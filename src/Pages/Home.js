import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const BeerImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Link to="/beerlist">
        <BeerImg src="/img/beerimg.jpg" alt="beer-img" />
      </Link>
    </HomeContainer>
  );
};

export default Home;
