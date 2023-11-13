import React, { useState } from "react";
import axios from "axios";

export default function Card() {
  const [pokemonData, setPokemonData] = useState("");
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1021";
  axios.get(apiUrl).then((response) => {
    response.data.results.forEach((pokemon) => {
      console.log(pokemon);
      /* pokemon.forEach((singlePokemon) => {
        console.log(singlePokemon.url);
        /* axios.get(singlePokemon.url).then((response) => {
          console.log(response.data);
        });
      });*/
    });
  });

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src="" alt="" />
      <h2>{}</h2>
      <p>{}</p>
    </div>
  );
}
