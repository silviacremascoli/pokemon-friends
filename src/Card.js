import React, { useState } from "react";
import axios from "axios";

export default function Card() {
  const [loaded, setLoaded] = useState(false);
  const [pokemonData, setPokemonData] = useState({});

  if (loaded) {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h2>{}</h2>
        <p>{}</p>
      </div>
    );
  } else {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1021";
    axios.get(apiUrl).then((response) => {
      response.data.results.forEach((pokemon) => {
        //console.log(pokemon);
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        //console.log(pokemonUrl);
        axios.get(pokemonUrl).then((response) => {
          setLoaded(true);
          setPokemonData(response.data);
        });
      });
    });
  }
}
