import { calculate, calculateAndReturn } from "../src/sum.js";

test("Test Calucalte", () => {
  const callback = jest.fn();

  calculate([1, 2, 3, 4, 5], callback);
  calculate([5, 5, 5, 5, 5], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(15);
  expect(callback.mock.calls[1][0]).toBe(25);
});

test("Test Mock return Value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndReturn([1, 2, 3, 4, 5], callback)).toBe(40);
  expect(calculateAndReturn([5, 5, 5, 5, 5], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});

test("Test Mock Implementation", () => {
  const callback = jest.fn();

  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateAndReturn([1, 2, 3, 4, 5], callback)).toBe(30);
  expect(calculateAndReturn([5, 5, 5, 5, 5], callback)).toBe(50);

  expect(callback.mock.results[0].value).toBe(30);
  expect(callback.mock.results[1].value).toBe(50);
});
