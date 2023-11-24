test("test toBe", () => {
  const name = "Reynaldi";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Reynaldi");
});

test("test toEqual", () => {
  let person = {
    id: "Reynaldi",
  };
  Object.assign(person, {
    name: "Reynaldi",
  });

  expect(person).toEqual({ id: "Reynaldi", name: "Reynaldi" });
});
