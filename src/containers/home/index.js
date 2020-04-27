import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchBar from "../../components/searchBar";
import ProductItem from "../../components/productItem";
import Cart from "../../components/cart";
import instance from "../../services/pokeAPI";

import pokebola from  "../../pokebola.png"

const Home = () => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await instance.get("/type/ice");

      response.data.pokemon.map(async (item) => {
        const response = await instance.get(item.pokemon.url)
        setPokeData((data) => [...data, response.data])
      })
      
    };

    getData();
  }, []);

  return (
    <div className="Home">
    
      <div className="content">
        <div className="product-list" >
            <ul>
              {
                pokeData.map((pokemon) => {
                  return (
                    <li>
                      <ProductItem name={pokemon.name} sprite={pokemon.sprites.front_default || pokebola} />
                    </li>
                  )
                })
              }
            </ul>        
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Home;
