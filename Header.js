import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <header style={{ padding: "10px", backgroundColor: "#e2e2e2" }}>
      <nav>
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;