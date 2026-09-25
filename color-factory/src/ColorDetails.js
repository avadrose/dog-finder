import {
  Link,
  Navigate,
  useParams
} from "react-router-dom";

function ColorDetails({ colors }) {
  const { color } = useParams();

  const foundColor = colors.find(
    c => c.name.toLowerCase() === color.toLowerCase()
  );

  if (!foundColor) {
    return <Navigate to="/colors" replace />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: foundColor.value,
        textAlign: "center",
        paddingTop: "50px"
      }}
    >
      <h1>
        This is {foundColor.name}!
      </h1>

      <Link to="/colors">
        Go Back
      </Link>
    </div>
  );
}

export default ColorDetails;