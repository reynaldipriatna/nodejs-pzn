test("string", () => {
  const name = "Reynaldi Priatna";

  expect(name).toBe("Reynaldi Priatna");
  expect(name).toMatch(/aldi/);
});
