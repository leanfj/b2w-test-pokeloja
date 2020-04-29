import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchBar from "../../components/searchBar";
import ProductItem from "../../components/productItem";
import Cart from "../../components/cart";
import instance from "../../services/pokeAPI";

import pokebola from "../../pokebola.png";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [pokeType, setPokeType] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await instance.get("/type/ice");
      setPokeType(response.data.name);
      response.data.pokemon.map(async (item) => {
        const response = await instance.get(item.pokemon.url);
        setPokeData((data) => [...data, response.data]);
      });
    };
    getData();
  }, []);

  const addToCart = (e, pokemon) => {
    e.preventDefault();
    setCartData((data) => [...data, pokemon]);
  };

  const removeFromCart = (e, itemKey) => {
    e.preventDefault();
    setCartData(cartData.filter((item, index) => index !== itemKey));
  };

  return (
    <div className={`Home ${pokeType}`}>
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
        <Cart data={cartData} handleRemove={removeFromCart} />
      </div>
    </div>
  );
};

export default Home;
