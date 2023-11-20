import React, { useState } from "react";

export default function Card() {
  const [loaded, setLoaded] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  let pokeImage;

  if (loaded) {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={pokeImage} alt={pokemonData.name} />
        <h2>{pokemonData.name}</h2>
        <p>{pokemonData.id}</p>
      </div>
    );
  } else {
    const fetchAllPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((allpokemon) => {
          allpokemon.results.forEach((pokemon) => {
            fetchPokemonData(pokemon);
          });
        });
    };

    function fetchPokemonData(pokemon) {
      let url = pokemon.url;
      fetch(url)
        .then((response) => response.json())
        .then(function (pokeData) {
          //renderPokemon(pokeData);
          setLoaded(true);
          setPokemonData(pokeData);
          let pokeID = pokemonData.id;
          pokeImage = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`;
        });
    }
    // axios.get(apiUrl).then((response) => {
    //   response.data.results.forEach((pokemon) => {
    //     console.log(pokemon);
    //     const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
    //     //console.log(pokemonUrl);
    //     axios.get(pokemonUrl).then((response) => {
    //       setLoaded(true);
    //       setPokemonData(response.data);
    //       //const pokemonName = pokemonData.name.charAt(0).toUpperCase();
    //     });
    //   });
    // });
    fetchAllPokemon();
  }
}
