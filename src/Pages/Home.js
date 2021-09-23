import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: relative;
`;

const BeerLinkBox = styled.div`
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

const GithubLink = styled.a``;
const GithubImg = styled.img`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 70px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BeerLinkBox>
        <Link to="/beerlist">
          <BeerImg src="/img/beerimg.jpg" alt="beer-img" />
        </Link>
      </BeerLinkBox>
      <GithubLink href="https://github.com/deveassy/tradir-codingtest">
        <GithubImg src="/img/githubicon.png" alt="github-img" />
      </GithubLink>
    </HomeContainer>
  );
};

export default Home;
