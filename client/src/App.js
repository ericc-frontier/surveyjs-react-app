import React from "react";
import SurveyComponent from "./components/SurveyComponent.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { SurveyCreatorWidget } from "./components/SurveyCreator";

function App() {
  //   var surveyBtn = () => {
  //     return (
  //       <div>
  //         <SurveyComponent></SurveyComponent>
  //       </div>
  //     );
  //   };
  //   var creatorBtn = () => {
  //     return <SurveyCreatorWidget></SurveyCreatorWidget>;
  //   };
  return (
    // <SurveyComponent></SurveyComponent>
    <SurveyCreatorWidget></SurveyCreatorWidget>
    // <div className="App">
    //   <button onClick={surveyBtn()}>Take a survey</button>
    //   {/* <SurveyComponent showCompletedPage={false}></SurveyComponent> */}
    //   <br></br>
    //   <button onClick={creatorBtn()}>Create a Survey</button>
    //   {/* <SurveyCreatorWidget></SurveyCreatorWidget> */}
    // // </div>
    // <Router>
    //   <Routes>
    //     <Route exact path="/survey" component={SurveyComponent()}></Route>
    //     <Route
    //       exact
    //       path="/surveyCreator"
    //       component={SurveyCreatorWidget()}
    //     ></Route>
    //     {/* Catch all route */}
    //     <Route component={SurveyComponent()}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
