import React from "react";
import "./styles.css";
import { FiX } from "react-icons/fi";
const CheckoutModal = ({ showModal, closeCheckout }) => {
  return (
    <div className={`modal ${showModal ? "show" : "hide"}`}>
      <div className="modal-content">
        modal{" "}
        <span onClick={() => closeCheckout()}>
          <FiX />
        </span>
      </div>
    </div>
  );
};

export default CheckoutModal;
