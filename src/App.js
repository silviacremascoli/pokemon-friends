import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div>
      {Array(1021)
        .fill(true)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
}
