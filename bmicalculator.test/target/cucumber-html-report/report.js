$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('bmicalculator/test/bmi_calculator.feature');
formatter.feature({
  "id": "calculating-body-mass-index",
  "description": "As a health specialist\nI want a BMI Calculator\nSo that I can calculate patient\u0027s Body Mass Index\nBmiCalculator",
  "name": "Calculating Body Mass Index",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "calculating-body-mass-index;calculate-body-mass-index;;2",
  "tags": [
    {
      "name": "@ios-sauce",
      "line": 7
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"170\" as height",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"50\" as weight",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I press the Calculate button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I should see \"17.30\" as bmi and \"Underweight\" as category",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "170",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_height(String)"
});
formatter.result({
  "duration": 2613410000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_weight(String)"
});
formatter.result({
  "duration": 1722478000,
  "status": "passed"
});
formatter.match({
  "location": "Bmi_Calculator_Step_Defs.I_press_the_Calculate_button()"
});
formatter.result({
  "duration": 1352729000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.30",
      "offset": 14
    },
    {
      "val": "Underweight",
      "offset": 33
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_should_see_as_bmi_and_Normal_as_category(String,String)"
});
formatter.result({
  "duration": 1906660000,
  "status": "passed"
});
formatter.scenario({
  "id": "calculating-body-mass-index;calculate-body-mass-index;;3",
  "tags": [
    {
      "name": "@ios-sauce",
      "line": 7
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"181\" as height",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"80\" as weight",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I press the Calculate button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I should see \"24.42\" as bmi and \"Normal\" as category",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "181",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_height(String)"
});
formatter.result({
  "duration": 2247700000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_weight(String)"
});
formatter.result({
  "duration": 2251379000,
  "status": "passed"
});
formatter.match({
  "location": "Bmi_Calculator_Step_Defs.I_press_the_Calculate_button()"
});
formatter.result({
  "duration": 1330917000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24.42",
      "offset": 14
    },
    {
      "val": "Normal",
      "offset": 33
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_should_see_as_bmi_and_Normal_as_category(String,String)"
});
formatter.result({
  "duration": 2090045000,
  "status": "passed"
});
formatter.scenario({
  "id": "calculating-body-mass-index;calculate-body-mass-index;;4",
  "tags": [
    {
      "name": "@ios-sauce",
      "line": 7
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"180\" as height",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"90\" as weight",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I press the Calculate button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I should see \"27.78\" as bmi and \"Overweight\" as category",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_height(String)"
});
formatter.result({
  "duration": 3942171000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_weight(String)"
});
formatter.result({
  "duration": 3480071000,
  "status": "passed"
});
formatter.match({
  "location": "Bmi_Calculator_Step_Defs.I_press_the_Calculate_button()"
});
formatter.result({
  "duration": 3070710000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27.78",
      "offset": 14
    },
    {
      "val": "Overweight",
      "offset": 33
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_should_see_as_bmi_and_Normal_as_category(String,String)"
});
formatter.result({
  "duration": 3786885000,
  "status": "passed"
});
formatter.scenario({
  "id": "calculating-body-mass-index;calculate-body-mass-index;;5",
  "tags": [
    {
      "name": "@ios-sauce",
      "line": 7
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"175\" as height",
  "keyword": "Given ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"100\" as weight",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I press the Calculate button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I should see \"32.65\" as bmi and \"Obese\" as category",
  "keyword": "Then ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "175",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_height(String)"
});
formatter.result({
  "duration": 4725234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_enter_as_weight(String)"
});
formatter.result({
  "duration": 3051882000,
  "status": "passed"
});
formatter.match({
  "location": "Bmi_Calculator_Step_Defs.I_press_the_Calculate_button()"
});
formatter.result({
  "duration": 2558980000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32.65",
      "offset": 14
    },
    {
      "val": "Obese",
      "offset": 33
    }
  ],
  "location": "Bmi_Calculator_Step_Defs.I_should_see_as_bmi_and_Normal_as_category(String,String)"
});
formatter.result({
  "duration": 3216415000,
  "status": "passed"
});
});