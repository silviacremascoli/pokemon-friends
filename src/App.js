import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <div>
      {Array(151)
        .fill(true)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
}
