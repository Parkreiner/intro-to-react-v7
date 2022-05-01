import { useState } from "react";

const ALL_SPECIES = Object.freeze(["bird", "cat", "dog", "elephant", "ferret"]);

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");

  const availableBreeds = ["poodle"];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location: {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        <label htmlFor="species">
          What kind of animal would you like?
          <select id="species" value={species} onChange={update} onBlur={update}>
            <option />
            {ALL_SPECIES.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          What kind of breed would you like?
          <select id="breed" value={breed} onChange={update} onBlur={update}>
            <option />
            {availableBreeds.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );

  function update(event) {
    setSpecies(event.target.value);
    setBreed("");
  }
};

export default SearchParams;
