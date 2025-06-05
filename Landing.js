import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>GreenLeaf Houseplants</h1>
      <p>Your one-stop shop for beautiful indoor plants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Landing;