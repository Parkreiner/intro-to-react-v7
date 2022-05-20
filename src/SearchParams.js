import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Indian Head");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-params">
      <form>
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
          <select id="animal" value={animal} onChange={handleChangeBlur} onBlur={handleChangeBlur}>
            <option />
            {ANIMALS.map(toOption)}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select id="breed" value={breed} onChange={handleChangeBlur} onBlur={handleChangeBlur}>
            <option />
            {breeds.map(toOption)}
          </select>
        </label>

        <button>Submit</button>
      </form>

      {pets.map(({ name, animal, breed, id }) => (
        <Pet name={name} animal={animal} breed={breed} key={id} />
      ))}
    </div>
  );

  ////////// Start of internal helpers

  function handleChangeBlur(event) {
    setAnimal(event.target.value);
    setBreed("");
  }

  async function requestPets() {
    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

    const response = await fetch(url);
    const json = await response.json();
    setPets(json.pets);
  }
};

function toOption(animalOrBreed) {
  return (
    <option key={animalOrBreed} value={animalOrBreed}>
      {animalOrBreed}
    </option>
  );
}

export default SearchParams;
