import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>

      <Link to="/colors/new">
        Add a color
      </Link>

      <h2>Please select a color:</h2>

      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;