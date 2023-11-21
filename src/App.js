import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function App() {
  const [pokemon, setPokemon] = useState();
  const [pokemonData, setPokemonData] = useState([]);

  const searchPokemon = () => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    axios.get(apiUrl).then((response) => {
      console.log(response);
      setPokemonData({
        name: response.data.name,
        image: response.data,
      });
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchPokemon();
  };

  const getPokemon = (event) => {
    setPokemon(event.target.value);
  };

  return (
    <div>
      {/* {Array(151)
        .fill(true)
        .map((_, i) => (
          <Card key={i} />
        ))} */}
      <input
        type="search"
        name="search"
        placeholder="Search for a Pokémon..."
        className="form-control"
        autoFocus="on"
        onChange={getPokemon}
      />
      <input
        type="submit"
        name="submit"
        value="🔍"
        className="btn btn-light w-100 search-button"
      />
    </div>
  );
}
