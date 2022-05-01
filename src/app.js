import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return (
    <div id="dog-app">
      <h1>Adopt me pls</h1>
      <Pet name="Bailey" species="Dog" breed="Miniature Dachshund" />
      <Pet name="Brownie" species="Dog" breed="Miniature Dachshund" />
      <Pet name="Dobah" species="Dog" breed="Unknown" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
