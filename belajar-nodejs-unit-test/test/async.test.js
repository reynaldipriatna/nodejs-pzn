import { sayHelloAsync } from "../src/async.js";

test("Test Async Function", async () => {
  const result = await sayHelloAsync("Reynaldi");
  expect(result).toBe("Hello Reynaldi");
});

test("Test Async Matchers", async () => {
  await expect(sayHelloAsync("Reynaldi")).resolves.toBe("Hello Reynaldi");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
