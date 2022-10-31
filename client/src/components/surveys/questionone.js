const json = {
  title: "Basic survey example",
  description: "survey description",
  completedHtml:
    "<h3>Thank you for completing the survey.</h3><h5>Frontier BPM</h5>",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "nps_score",
          title:
            "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague? (Scores of 5 or lower trigger new question)",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "(Most unlikely)",
          maxRateDescription: "(Most likely)",
        },
        {
          type: "comment",
          name: "passive_experience",
          visibleIf: "{nps_score} <= 5",
          title: "What can we do to make your experience more satisfying?",
        },
        {
          type: "rating",
          name: "satisfaction",
          title: "How satisfied are you with the Product?",
          minRateDescription: "Not Satisfied",
          maxRateDescription: "Completely satisfied",
        },
        {
          type: "checkbox",
          name: "car",
          title: "Which is the brand of your car?",
          isRequired: true,
          showNoneItem: true,
          colCount: 4,
          choices: [
            "Ford",
            "Volkswagen",
            "Nissan",
            "Audi",
            "Mercedes-Benz",
            "BMW",
            "Toyota",
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "car",
          isRequired: true,
          title: "What cars have you being drived?",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Ford",
            "Volkswagen",
            "Nissan",
            "Audi",
            "Mercedes-Benz",
            "BMW",
            "Toyota",
          ],
        },
        {
          type: "ranking",
          name: "bestcar",
          isRequired: true,
          visibleIf: "{car.length} > 1",
          title: "What car did you enjoy the most?",
          choicesFromQuestion: "car",
          choicesFromQuestionMode: "selected",
        },
      ],
    },
  ],
  questionsOrder: "random",
  showProgressBar: "bottom",
  startSurveyText: "Start Quiz",
};

export default json;
