function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "Reynaldi";
  const lastName = "Priatna";

  tagFunction`Hello ${name} ${lastName}!, How are you?`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;
});

test("tag function sql", () => {
  const name = "Reynaldi";
  const age = 25;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
