import React from "react";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

const ProductItem = ({name, sprite, handleLoading}) => {
  return (
    <div className="item-container">
      <img src={sprite} alt="Pokemon" onLoad={handleLoading} />
  <p>{name}</p>
      <p>PREÇO</p>
      <button className="poke-button">
        Adicionar <FiPlus />
      </button>
    </div>
  );
};

export default ProductItem;
