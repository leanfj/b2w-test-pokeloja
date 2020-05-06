import React from "react";
import { FiPlus } from "react-icons/fi";
import "./styles.css";
import { formatCurrency } from "../../utils";

const ProductItem = ({ name, sprite, price, handleCart }) => {
  return (
    <div className="item-container">
      <img src={sprite} alt="Pokemon" />
      <p>{name}</p>
      <p>{formatCurrency(price)}</p>
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
