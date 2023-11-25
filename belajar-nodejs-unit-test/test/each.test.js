import { sumAll } from "../src/sum.js";

const table = [
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
  [[20, 20, 20, 20], 80],
];

it.each(table)("Test sumAll(%s) should be %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
