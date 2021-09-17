import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <h2>Go to Beer List</h2>
      <Link to="/beerlist">Beer</Link>
    </div>
  );
};

export default Home;
