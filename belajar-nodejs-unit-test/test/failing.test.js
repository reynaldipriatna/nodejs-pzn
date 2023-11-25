import { sayHello } from "../src/sayHello.js";

test("HayHello Susccess", () => {
  expect(sayHello("Reynaldi")).toBe("Hello Reynaldi");
});

test.failing("sayHello Error", () => {
  sayHello(null);
});

test("sayHello Error Matchers", () => {
  expect(() => sayHello(null)).toThrow();
});
