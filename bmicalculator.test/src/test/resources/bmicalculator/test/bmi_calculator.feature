Feature: Calculating Body Mass Index
  As a health specialist
  I want a BMI Calculator
  So that I can calculate patient's Body Mass Index
  BmiCalculator

  @ios-sauce
  Scenario Outline: Calculate Body Mass Index
    Given I enter "<Height>" as height
    And I enter "<Weight>" as weight
    And I press the Calculate button
    Then I should see "<BMI>" as bmi and "<Category>" as category

  Examples:
    |Height |Weight |BMI  |Category   |
    |170    |50     |17.30|Underweight|
    |181    |80     |24.42|Normal     |
    |180    |90     |27.78|Overweight |
    |175    |100    |32.65|Obese      |
