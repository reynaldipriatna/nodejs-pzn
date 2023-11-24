test("array simple", () => {
  const names = ["Reynaldi", "Priatna", "Revolt"];
  expect(names).toContain("Reynaldi");
});

test("Array Object", () => {
  const persons = [
    {
      name: "Reynaldi",
    },
    {
      name: "Priatna",
    },
  ];
  expect(persons).toContainEqual({ name: "Reynaldi" });
});
