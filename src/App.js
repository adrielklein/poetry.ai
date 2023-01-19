import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [poem, setPoem] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const generatePoem = () => {
    // Use the userInput to generate a poem and set it to the poem state
    setPoem(userInput);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Poem Generator</h1>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        style={{
          margin: "8px 4px",
          boxSizing: "border-box",
          borderRadius: "4px",
        }}
      />
      <button onClick={generatePoem}>Generate Poem</button>
      <div>{poem}</div>
    </div>
  );
};

export default App;
