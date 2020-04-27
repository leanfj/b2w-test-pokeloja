import React from "react";
import CartItem from "../cartItem";
import { FiCheck } from "react-icons/fi";
import "./styles.css";
const Cart = () => {
  return (
    <div className="cart-container">
      <p className="cart-header">Carrinho</p>
      <div className="cart-itens">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-total">Total</div>
      <button className="poke-button">
        Finalizar <FiCheck />
      </button>
    </div>
  );
};

export default Cart;
