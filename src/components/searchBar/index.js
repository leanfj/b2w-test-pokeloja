import React from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Procurar Pokémon" />
      <button>
        <FiSearch size={35} />
      </button>
    </div>
  );
};

export default SearchBar;
