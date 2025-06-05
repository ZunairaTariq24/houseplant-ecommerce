import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";

const plants = [
  { id: "1", name: "Snake Plant", price: 15, image: "🌿" },
  { id: "2", name: "Spider Plant", price: 10, image: "🌱" },
  { id: "3", name: "Peace Lily", price: 20, image: "🌸" },
  { id: "4", name: "Aloe Vera", price: 12, image: "🪴" },
  { id: "5", name: "ZZ Plant", price: 18, image: "🌵" },
  { id: "6", name: "Fiddle Leaf Fig", price: 25, image: "🌳" },
];

const ProductPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id} style={{ marginBottom: "10px" }}>
          <span style={{ fontSize: "2rem" }}>{plant.image}</span>
          <strong>{plant.name}</strong> - ${plant.price}
          <button
            disabled={cart[plant.id]}
            onClick={() => dispatch(addToCart(plant))}
            style={{ marginLeft: "10px" }}
          >
            {cart[plant.id] ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;