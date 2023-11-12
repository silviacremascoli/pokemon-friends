import React from "react";

export default function Card() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1021";
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {console.log(data)});

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src="" alt="" />
      <h2>{}</h2>
      <p>{}</p>
    </div>
  );
}
