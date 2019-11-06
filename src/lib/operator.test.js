import { sum, countDigits } from "./operator";
// const sum = require("./sum");
test("adds 1 + 2 to equal 3", function() {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", function() {
  expect(sum(1, 2)).toBe(3);
});

test("count digits of 213", function() {
  const result = countDigits(213);
  expect(result).toBe(3);
});

test("count digits of 3129823", function() {
  const result = countDigits(3129823);
  expect(result).toBe(7);
});

test("count digits of -213", function() {
  const result = countDigits(-213);
  expect(result).toBe(4);
});

test("count digits of 0", function() {
  const result = countDigits(0);
  expect(result).toBe(1);
});
