"use strict";
// subButton.addEventListener("click", function() {
//   const firstNumber = parseInt(firstInput.value);
//   const secondNumber = parseInt(secondInput.value);
//   result.innerHTML = sub(firstNumber, secondNumber);
// });
import { sum, sub, div, multi } from "./lib/operator";
import {
  createDivWithContent,
  appendElementToElement,
  calc
} from "./lib/elements";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const result = document.querySelector("#result");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const divButton = document.querySelector(".div");
const multiButton = document.querySelector(".multi");

sumButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstInput.value);
});
