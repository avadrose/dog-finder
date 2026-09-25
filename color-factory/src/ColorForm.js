import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({ addColor }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("#ff0000");
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!name.trim()) return;

    addColor({
      name: name.trim().toLowerCase(),
      value
    });

    navigate("/colors");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color name:</label>

        <input
          id="name"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
      </div>

      <div>
        <label htmlFor="value">Color:</label>

        <input
          id="value"
          type="color"
          value={value}
          onChange={evt => setValue(evt.target.value)}
        />
      </div>

      <button>Add Color</button>
    </form>
  );
}

export default ColorForm;