import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Dog Finder</h1>

      {dogs.map(dog => (
        <div key={dog.name}>
          <img
            src={`/${dog.src}.jpg`}
            alt={dog.name}
            width="250"
          />

          <h2>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              {dog.name}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default DogList;