import { sumAll } from "../src/sum.js";

describe("when call sumALL", () => {
  it("should get 15 with parameter [1,2,3,4,5]", () => {
    expect(sumAll([1, 2, 3, 4, 5])).toBe(15);
  });

  it("should get 50 with parameter [25,25]", () => {
    expect(sumAll([25, 25])).toBe(50);
  });
});
