import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SurveyComponent from "./components/SurveyComponent";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SurveyComponent /> */}
    <App />
  </React.StrictMode>
);
