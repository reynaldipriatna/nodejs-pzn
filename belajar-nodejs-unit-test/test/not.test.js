test("String.not", () => {
  const name = "Reynaldi Priatna";

  expect(name).not.toBe("Revolt");
  expect(name).not.toEqual("Revolt");
  expect(name).not.toMatch(/Revolt/);
});

test("Number.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});
