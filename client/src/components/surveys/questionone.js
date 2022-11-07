const json = {
  title: "Welcome to a new survey!",
  description:
    "Please answer all questions. Any question marked with an * is required",
  completedHtml:
    "<h3>Thank you for completing the survey.</h3><h5>Frontier BPM</h5>",
  pages: [
    {
      name: "page1",
      title: "Patient Information",
      elements: [
        {
          type: "panel",
          name: "patienName",
          elements: [
            {
              type: "text",
              name: "patientLastName",
              title: "(Last)",
              isRequired: true,
            },
            {
              type: "text",
              name: "patienFirstName",
              startWithNewLine: false,
              title: "(First)",
              isRequired: true,
            },
            {
              type: "text",
              name: "patientMiddleName",
              title: "(M.I)",
            },
          ],
          questionTitleLocation: "bottom",
          title: "Patient Name",
        },
        {
          type: "panel",
          name: "panel1",
          elements: [
            {
              type: "radiogroup",
              choices: [
                {
                  value: "patient",
                  text: "Patient",
                },
                {
                  value: "spouse",
                  tex: "Spouse",
                },
              ],
              colCount: 0,
              showOtherItem: true,
              isRequired: true,
              name: "completedBy",
              otherText: "Other (specify)",
              title: "Who completed this form:",
            },
            {
              type: "text",
              name: "completedByOtherName",
              visibleIf: '{completedBy} != "patient"',
              startWithNewLine: false,
              title: "Name (if other than patient):",
            },
            {
              type: "signaturepad",
              name: "signature",
              title: "Please sign here",
              isRequired: true,
            },
          ],
          title: "Completed By",
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
          title: "What vehicle brands have you driven before?",
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
        {
          type: "radiogroup",
          name: "injuriesbrokenbones",
          title: "Have you had any serious injuries and/or broken bones?",
          isRequired: true,
          choices: [
            {
              value: "no",
              text: "No",
            },
            {
              value: "yes",
              text: "Yes",
            },
          ],
          colCount: 0,
        },
        {
          type: "radiogroup",
          name: "using_duration",
          title: "How long have you been using the service?",
          choices: [
            "Less than a month",
            "1-6 months",
            "7-12 months",
            "1-3 years",
            "Over 3 years",
          ],
        },

        {
          type: "radiogroup",
          name: "eventQuestion",
          visibleIf: "{using_duration} notEmpty",
          title: "Would you buy this service again?",
          isRequired: true,
          choices: [
            {
              value: "yes",
              text: "yes",
            },
            {
              value: "no",
              text: "No",
            },
          ],
        },
      ],
    },
    {
      name: "page1",
      elements: [
        {
          type: "paneldynamic",
          name: "relatives",
          title: "Please enter all blood relatives you know",
          renderMode: "progressTop",
          templateTitle:
            "#{panelIndex}. Information about: {panel.relativeType}",
          templateElements: [
            {
              name: "relativeType",
              type: "dropdown",
              title: "Relative",
              choices: [
                "father",
                "mother",
                "brother",
                "sister",
                "son",
                "daughter",
              ],
              isRequired: true,
            },
            {
              name: "isalive",
              type: "radiogroup",
              title: "Alive?",
              startWithNewLine: false,
              isRequired: true,
              colCount: 0,
              choices: ["Yes", "No"],
            },
            {
              name: "liveage",
              type: "dropdown",
              title: "Age",
              isRequired: true,
              startWithNewLine: false,
              visibleIf: "{panel.isalive} = 'Yes'",
              choicesMin: 1,
              choicesMax: 115,
            },
            {
              name: "deceasedage",
              type: "dropdown",
              title: "Deceased Age",
              isRequired: true,
              startWithNewLine: false,
              visibleIf: "{panel.isalive} = 'No'",
              choices: [
                {
                  value: -1,
                  text: "Unknown",
                },
              ],
              choicesMin: 1,
              choicesMax: 115,
            },
            {
              name: "causeofdeathknown",
              type: "radiogroup",
              title: "Cause of Death Known?",
              isRequired: true,
              colCount: 0,
              startWithNewLine: false,
              visibleIf: "{panel.isalive} = 'No'",
              choices: ["Yes", "No"],
            },
            {
              name: "causeofdeath",
              type: "text",
              title: "Cause of Death",
              isRequired: true,
              startWithNewLine: false,
              visibleIf:
                "{panel.isalive} = 'No' and {panel.causeofdeathknown} = 'Yes'",
            },
            {
              type: "panel",
              name: "moreInfo",
              state: "expanded",
              title: "Detail Information about: {panel.relativeType}",
              elements: [
                {
                  type: "matrixdynamic",
                  name: "relativeillness",
                  title: "Describe the illness or condition.",
                  rowCount: 0,
                  columns: [
                    {
                      name: "illness",
                      cellType: "dropdown",
                      title: "Illness/Condition",
                      choices: [
                        "Cancer",
                        "Heart Disease",
                        "Diabetes",
                        "Stroke/TIA",
                        "High Blood Pressure",
                        "High Cholesterol or Triglycerides",
                        "Liver Disease",
                        "Alcohol or Drug Abuse",
                        "Anxiety, Depression or Psychiatric Illness",
                        "Tuberculosis",
                        "Anesthesia Complications",
                        "Genetic Disorder",
                        "Other – describe",
                      ],
                      isRequired: true,
                    },
                    {
                      name: "description",
                      cellType: "text",
                      title: "Describe",
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
          panelCount: 2,
          panelAddText: "Add a blood relative",
          panelRemoveText: "Remove the relative",
        },
      ],
    },
  ],
  // questionsOrder: "random",
  showProgressBar: "bottom",
};

export default json;
