import React from "react";
import { render } from "react-dom";
import { Pet } from "./pet";

function App() {
  return React.createElement("div", null, [
    React.createElement("h1", "Adopt me pls"),
    React.createElement(Pet, {
      name: "Bailey",
      species: "Dog",
      breed: "Miniature Dachshund",
    }),
    React.createElement(Pet, {
      name: "Brownie",
      species: "Dog",
      breed: "Miniature Dachshund",
    }),
    React.createElement(Pet, {
      name: "Dobah",
      species: "Dog",
      breed: "Unknown",
    }),
  ]);
}

render(React.createElement(App), document.getElementById("root"));
