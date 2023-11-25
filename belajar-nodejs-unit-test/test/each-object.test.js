import { sumAll } from "../src/sum.js";

const table = [
  {
    numbers: [10, 10, 10],
    expected: 30,
  },
  {
    numbers: [10, 10, 10, 10, 10],
    expected: 50,
  },
  {
    numbers: [20, 20, 20, 20],
    expected: 80,
  },
];

it.each(table)(
  "Test sumAll($numbers) should be $expected",
  ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
  }
);
