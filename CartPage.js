import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, remove } from "./cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      <p>Total Price: ${cart.totalPrice}</p>
      {Object.values(cart.items).map((item) => (
        <div key={item.id}>
          <span style={{ fontSize: "2rem" }}>{item.image}</span>
          <strong>{item.name}</strong> - ${item.price} x {item.quantity}
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Delete</button>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button>Checkout (Coming Soon)</button>
        <Link to="/products">
          <button style={{ marginLeft: "10px" }}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;