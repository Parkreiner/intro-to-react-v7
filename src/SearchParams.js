import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={animalChangeBlur} onBlur={animalChangeBlur}>
            <option />
            {ANIMALS.map(toOption)}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select id="breed" value={breed} onChange={breedChangeBlur} onBlur={breedChangeBlur}>
            <option />
            {breeds.map(toOption)}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );

  ////////// Start of internal helpers

  function animalChangeBlur(event) {
    setAnimal(event.target.value);
    setBreed("");
  }

  function breedChangeBlur(event) {
    setBreed(event.target.value);
  }

  async function requestPets() {
    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

    const response = await fetch(url);
    const json = await response.json();
    setPets(json.pets);
  }
};

function toOption(optionText) {
  return (
    <option key={optionText} value={optionText}>
      {optionText}
    </option>
  );
}

export default SearchParams;
