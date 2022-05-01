function Pet(props) {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.species),
    React.createElement("h2", null, props.breed),
  ]);
}

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
