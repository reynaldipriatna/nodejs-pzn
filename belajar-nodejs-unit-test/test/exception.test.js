import { callMe, MyException } from "../src/exception.js";

test("Exception", () => {
  expect(() => callMe("Reynaldi")).toThrow();
  expect(() => callMe("Reynaldi")).toThrow(MyException);
  expect(() => callMe("Reynaldi")).toThrow("Ups my exception happens");
});

test("Exception Not Happens", () => {
  expect(callMe("Revolt")).toBe("OK");
});
