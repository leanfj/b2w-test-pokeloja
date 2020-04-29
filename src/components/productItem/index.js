import React from "react";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

const ProductItem = ({ name, sprite, price, handleCart }) => {
  return (
    <div className="item-container">
      <img src={sprite} alt="Pokemon" />
      <p>{name}</p>
      <p>R$ {price},00</p>
      <button
        className="poke-button"
        onClick={(e) => handleCart(e, { name, sprite, price })}
      >
        Adicionar <FiPlus />
      </button>
    </div>
  );
};

export default ProductItem;
