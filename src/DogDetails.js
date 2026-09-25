import { Link, useParams, Navigate } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  const dog = dogs.find(
    dog => dog.name.toLowerCase() === name.toLowerCase()
  );

  if (!dog) {
    return <Navigate to="/dogs" replace />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>

      <img
        src={`/${dog.src}.jpg`}
        alt={dog.name}
        width="300"
      />

      <h2>Age: {dog.age}</h2>

      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>

      <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetails;