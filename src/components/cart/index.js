import React from "react";
import CartItem from "../cartItem";
import { FiCheck } from "react-icons/fi";
import "./styles.css";
const Cart = ({ data, handleRemove }) => {
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
      <div className="cart-total">Total</div>
      <button className="poke-button">
        Finalizar <FiCheck />
      </button>
    </div>
  );
};

export default Cart;
