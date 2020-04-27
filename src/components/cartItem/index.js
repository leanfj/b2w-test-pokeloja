import React from "react";
import pokemon from "../../pokemon.png";
import "./styles.css";
const CartItem = () => {
  return (
    <div className="cart-item">
      <img src={pokemon} alt="Pokemon" />
      <p>Nome</p>
      <span>Preço</span>
    </div>
  );
};

export default CartItem;
