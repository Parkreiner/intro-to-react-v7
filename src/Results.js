import Pet from "./Pet";

const Results = ({ pets }) => {
  const innerContent = pets.length === 0 ? <h1>No pets founds</h1> : pets.map(toPetComponent);
  return <div>{innerContent}</div>;
};

function toPetComponent(pet) {
  return (
    <Pet
      name={pet.name}
      animal={pet.animal}
      breed={pet.breed}
      key={pet.id}
      images={pet.images}
      location={`${pet.city}, ${pet.state}`}
      id={pet.id}
    />
  );
}

export default Results;
