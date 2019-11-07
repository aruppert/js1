"use strict";

import { sum, sub, div, multi } from "./lib/operator";
import { createDivWithContent, appendElementToElement } from "./lib/elements";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const result = document.querySelector("#result");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const divButton = document.querySelector(".div");
const multiButton = document.querySelector(".multi");

function getInputs() {}

subButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sub(firstNumber, secondNumber);
});

sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  const finalResult = sum(firstNumber, secondNumber);
  result.innerHTML = finalResult;
  const historyElement = createDivWithContent(finalResult);
  const parentElement = document.getElementById("history");
  appendElementToElement(parentElement, historyElement);
});

divButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = div(firstNumber, secondNumber);
});
multiButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = multi(firstNumber, secondNumber);
});
// sumButton.addEventListener("click", function() {
//   const firstNumber = parseInt(firstInput.value);

//   const secondNumber = parseInt(secondInput.value);

//   result.innerHTML = sum(firstNumber, secondNumber);
// });
