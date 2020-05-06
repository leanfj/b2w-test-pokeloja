import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import SearchBar from "../../components/searchBar";
import ProductItem from "../../components/productItem";
import Cart from "../../components/cart";
import instance from "../../services/pokeAPI";

import pokebola from "../../pokebola.png";
import CheckoutModal from "../../components/checkoutModal";

import { formatCurrency, capitalize } from "../../utils";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [pokeType, setPokeType] = useState("");
  const [checkoutModal, setCheckoutModal] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await instance.get(`/type/${id}`);
      setPokeType(response.data.name);
      setPokeData([]);
      response.data.pokemon.map(async (item) => {
        const response = await instance.get(item.pokemon.url);
        setPokeData((data) => [...data, response.data]);
      });
    };
    getData();
  }, [id]);

  useEffect(() => {
    const cartStored = localStorage.getItem("cartData");
    if (cartStored) {
      setCartData(JSON.parse(cartStored));
    }
  }, []);

  const addToCart = (e, pokemon) => {
    e.preventDefault();
    setCartData((data) => {
      localStorage.setItem("cartData", JSON.stringify([...data, pokemon]));
      return [...data, pokemon];
    });
  };

  const removeFromCart = (e, itemKey) => {
    e.preventDefault();
    setCartData((data) => {
      const newData = data.filter((item, index) => index !== itemKey);
      localStorage.setItem("cartData", JSON.stringify(newData));
      return newData;
    });
  };

  const cartCheckout = (e) => {
    setCheckoutModal(!checkoutModal);
  };
  const cartTotalPrice = cartData.reduce((acc, item) => item.price + acc, 0);

  return (
    <div className={`Home ${pokeType}`}>
      <CheckoutModal showModal={checkoutModal} closeCheckout={cartCheckout} />
      <SearchBar />
      <div className="content">
        <div className="product-list">
          <ul>
            {pokeData.map((pokemon, index) => {
              return (
                <li key={index}>
                  <ProductItem
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default || pokebola}
                    price={pokemon.base_experience}
                    handleCart={addToCart}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <Cart
          data={cartData}
          handleRemove={removeFromCart}
          handleChekout={cartCheckout}
          totalPrice={formatCurrency(cartTotalPrice)}
        />
      </div>
    </div>
  );
};

export default Home;
