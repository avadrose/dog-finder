import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useState } from "react";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import ColorDetails from "./ColorDetails";

function App() {
  const [colors, setColors] = useState([
    { name: "red", value: "#ff0000" },
    { name: "blue", value: "#0000ff" },
    { name: "green", value: "#008000" }
  ]);

  function addColor(newColor) {
    setColors(colors => [newColor, ...colors]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/colors"
          element={<ColorList colors={colors} />}
        />

        <Route
          path="/colors/new"
          element={<ColorForm addColor={addColor} />}
        />

        <Route
          path="/colors/:color"
          element={<ColorDetails colors={colors} />}
        />

        <Route
          path="*"
          element={<Navigate to="/colors" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;