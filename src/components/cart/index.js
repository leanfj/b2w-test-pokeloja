import React from "react";
import CartItem from "../cartItem";
import { FiCheck } from "react-icons/fi";
import "./styles.css";
const Cart = ({ data, totalPrice, handleRemove, handleChekout }) => {
  return (
    <div className="cart-container">
      <p className="cart-header">Carrinho</p>
      {!data.length ? (
        <h3>Carrinho Vazio</h3>
      ) : (
        data.map((item, index) => {
          return (
            <div className="cart-itens" key={index}>
              <CartItem data={item} idx={index} deletItem={handleRemove} />
            </div>
          );
        })
      )}
      <div className="cart-total"> {totalPrice}</div>
      <button className="poke-button" onClick={handleChekout}>
        Finalizar <FiCheck />
      </button>
    </div>
  );
};

export default Cart;
