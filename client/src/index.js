import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SurveyComponent from "./components/SurveyComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SurveyComponent />
  </React.StrictMode>
);
