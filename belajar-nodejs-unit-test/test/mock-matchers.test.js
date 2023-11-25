import { calculate } from "../src/sum.js";

test("Test Mock Matchers", () => {
  const callback = jest.fn();

  calculate([1, 2, 3, 4, 5], callback);
  calculate([5, 5, 5, 5, 5], callback);

  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(15);
  expect(callback).toHaveBeenCalledWith(25);
});
