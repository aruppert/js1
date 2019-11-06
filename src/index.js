"use strict";

import { sum, sub, div, multi, countDigits } from "./lib/operator";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const result = document.querySelector("#result");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const divButton = document.querySelector(".div");
const multiButton = document.querySelector(".multi");
const lengthButton = document.querySelector(".length");
let resultLength = result.innerHTML.length;

function getInputs() {}

subButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);
  result.innerHTML = sub(firstNumber, secondNumber);
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
sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);

  const secondNumber = parseInt(secondInput.value);

  result.innerHTML = sum(firstNumber, secondNumber);
});

lengthButton.addEventListener("click", function() {
  Alert(resultLength);
});
