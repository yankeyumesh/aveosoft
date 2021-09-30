import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2 className="text-center">Aveosoft Shop</h2>
      <Link to="/products">
        <h2 className="text-center my-3"> Check Product Lists</h2>
      </Link>
    </>
  );
};

export default Home;
