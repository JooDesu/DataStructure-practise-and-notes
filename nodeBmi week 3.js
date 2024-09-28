var readline = require("readline-sync");

var weight = readline.questionInt("Please input your weight in kg");
var height = readline.questionInt("Please input your height in cm");
var bmi = weight / ((height / 100) ** 2);
switch (true) {
    case (bmi>=40):
            category = "morbidly obese"
        break;
    case(bmi>=35):
            category = "severly obese"
        break;
    case(bmi>=30):
            category = "obese"
        break;
    case(bmi>=25):
            category="obese"
        break;
    case(bmi>=18.5):
            category="healthy weight"
        break;
    default:
            category="undeweight"
        break;
    }

console.log("Hello, Your BMI is:" + bmi + ",you are " + category + ".");