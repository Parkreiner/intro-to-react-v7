import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="dog-app">
      <h1>Adopt me pls</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
