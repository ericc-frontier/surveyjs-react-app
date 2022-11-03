import React, { useState } from "react";
import SurveyComponent from "./components/SurveyComponent.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { SurveyCreatorWidget } from "./components/SurveyCreator";

function App() {
  const [selection, setSelection] = useState("");

  return (
    <div>
      <button onClick={() => setSelection("creator")}>Create a survey</button>
      <button onClick={() => setSelection("survey")}>Take a survey</button>
      <button onClick={() => setSelection("")}>Refresh Page</button>
      {selection === "creator" ? <SurveyCreatorWidget /> : null}
      {selection === "survey" ? <SurveyComponent /> : null}
    </div>
  );
}

export default App;
