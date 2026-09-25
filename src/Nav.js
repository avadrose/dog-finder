import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      <Link to="/dogs">Home</Link>

      {dogs.map(dog => (
        <span key={dog.name}>
          {" | "}
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}

export default Nav;