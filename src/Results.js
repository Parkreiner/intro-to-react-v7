import Pet from "./Pet";

// Apparently this is how React devs write a lot React code. I hate it.
//eslint-disable-next-line no-unused-vars
const ResultsByAReactDev = ({ pets }) => {
  return (
    <div>
      {pets.length ? (
        <h1>No pets found.</h1>
      ) : (
        pets.map(({ name, animal, breed, id, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            id={id}
            location={`${(city, state)}`}
          />
        ))
      )}
    </div>
  );
};

const Results = ({ pets }) => {
  const innerContent = pets.length ? pets.map(toPetComponent) : <h1>No pets found.</h1>;
  return <div>{innerContent}</div>;

  ////////// Start of internal helpers

  function toPetComponent({ name, animal, breed, id, city, state, images }) {
    const location = `${city}, ${state}`;
    return (
      <Pet
        name={name}
        animal={animal}
        breed={breed}
        key={id}
        location={location}
        id={id}
        images={images}
      />
    );
  }
};

export default Results;
