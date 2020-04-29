import React from "react";
import "./styles.css";
import { FiTrash } from "react-icons/fi";
const CartItem = ({ idx, data, deletItem }) => {
  return (
    <div className="cart-item">
      <img src={data.sprite} alt="Pokemon" />
      <p>{data.name}</p>
      <span>R$ {data.price}</span>
      <button onClick={(e) => deletItem(e, idx)}>
        <FiTrash />
      </button>
    </div>
  );
};

export default CartItem;
