import { getBalance } from "../src/async.js";

test("Mock Async Function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("Reynaldi", from)).resolves.toEqual({
    name: "Reynaldi",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("Mock Async Function Rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Upss"));

  await getBalance("Reynaldi", from);
});
