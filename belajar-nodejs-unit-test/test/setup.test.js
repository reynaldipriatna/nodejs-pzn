import { sum } from "../src/sum.js";

beforeAll(() => {
  console.info("Before All");
});

afterAll(async () => {
  console.info("After All");
});

beforeEach(async () => {
  console.info("beforeEach");
});

afterEach(() => {
  console.info("afterEach");
});

test("First Test", async () => {
  expect(sum(10, 10)).toBe(20);
  console.info("First Test");
});

test("Second Test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("Second Test");
});
