import React, { Component } from "react";

import * as Survey from "survey-react";

import "bootstrap/dist/css/bootstrap.css";
import "survey-react/survey.css";
import json from "./surveys/questionone";

class SurveyComponent extends Component {
  render() {
    const survey = new Survey.Model(json);

    var storageName = "SurveyJS_LoadState";

    function loadState(survey) {
      //Here should be the code to load the data from your database
      var storageSt = window.localStorage.getItem(storageName) || "";
      var res = {};
      if (storageSt) res = JSON.parse(storageSt);

      //Set the loaded data into the survey.
      if (res.currentPageNo) survey.currentPageNo = res.currentPageNo;
      if (res.data) survey.data = res.data;
    }
    function saveState(survey) {
      var res = { currentPageNo: survey.currentPageNo, data: survey.data };
      //Here should be the code to save the data into your database
      window.localStorage.setItem(storageName, JSON.stringify(res));
    }
    function clearStorage() {
      window.localStorage.removeItem(storageName);
    }
    survey.onValueChanged.add(function (survey, options) {
      saveState(survey);
    });
    survey.onCurrentPageChanged.add(function (survey, options) {
      saveState(survey);
    });
    survey.onComplete.add(function (survey, options) {
      //save the data on survey complete. You may call another function to store the final results
      saveState(survey);
      //TODO: save data to server
      //clear the local storage data
      clearStorage();
    });
    //Load the initial state
    loadState(survey);

    return <Survey.Survey model={survey} />;
  }
}

export default SurveyComponent;
