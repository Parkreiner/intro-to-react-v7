import React from "react";

function Pet(props) {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.species),
    React.createElement("h2", null, props.breed),
  ]);
}

export default Pet;
