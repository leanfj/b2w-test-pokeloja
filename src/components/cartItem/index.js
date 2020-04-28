import React from "react";
import pokemon from "../../pokemon.png";
import "./styles.css";
import { FiTrash } from "react-icons/fi";
const CartItem = () => {
  return (
    <div className="cart-item">
      <img src={pokemon} alt="Pokemon" />
      <p>Nome</p>
      <span>Preço</span>
      <button>
        <FiTrash />
      </button>
    </div>
  );
};

export default CartItem;
