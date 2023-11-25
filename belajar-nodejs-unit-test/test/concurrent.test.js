import { sayHelloAsync } from "../src/async";

test.concurrent("Concurrent 1", async () => {
  await expect(sayHelloAsync("Reynaldi")).resolves.toBe("Hello Reynaldi");
});
test.concurrent("Concurrent 2", async () => {
  await expect(sayHelloAsync("Reynaldi")).resolves.toBe("Hello Reynaldi");
});
test.concurrent("Concurrent 3", async () => {
  await expect(sayHelloAsync("Reynaldi")).resolves.toBe("Hello Reynaldi");
});
