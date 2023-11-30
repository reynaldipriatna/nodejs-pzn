import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello {{name}}", { name: "Reynaldi" });
  expect(data).toBe("Hello Reynaldi");
});

test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello {{name}}");

  const data = Mustache.render("Hello {{name}}", { name: "Reynaldi" });
  expect(data).toBe("Hello Reynaldi");
});

test("Tags", () => {
  const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
    name: "Reynaldi",
    hobby: "<b>Coding</b>",
  });

  expect(data).toBe("Hello Reynaldi, my hobby is <b>Coding</b>");
});

test("Nested Object", () => {
  const data = Mustache.render(
    "Hello {{person.name}}, my hobby is {{{person.hobby}}}",
    {
      person: {
        name: "Reynaldi",
        hobby: "<b>Coding</b>",
      },
    }
  );

  expect(data).toBe("Hello Reynaldi, my hobby is <b>Coding</b>");
});

test("Mustache File", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Reynaldi Priatna",
  });
  expect(data).toContain("Reynaldi Priatna");
});

test("Mustache Sections Not Show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.info(data);
  expect(data).not.toContain("Hello Person");
});

test("Mustache Sections Show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Reynaldi",
    },
  });
  console.info(data);
  expect(data).toContain("Hello Person");
});

test("Sections Data", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Reynaldi",
    },
  });
  console.info(data);
  expect(data).toContain("Hello Person Reynaldi");
});

test("Inverted Sections", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.info(data);
  expect(data).toContain("Hello Guest");
});

test("List", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hobbies.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ["Coding", "Gaming", "Reading"],
  });
  console.info(data);
  expect(data).toContain("Coding");
  expect(data).toContain("Gaming");
  expect(data).toContain("Reading");
});

test("List Object", async () => {
  const helloTemplate = await fs
    .readFile("./templates/students.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    students: [
      { name: "Reynaldi", value: 100 },
      { name: "Priatna", value: 95 },
    ],
  });
  console.info(data);
  expect(data).toContain("Reynaldi");
  expect(data).toContain("Priatna");
  expect(data).toContain("100");
  expect(data).toContain("95");
});

test("Functions", async () => {
  const parameter = {
    name: "Reynaldi Priatna",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
  console.info(data);
  expect(data).toBe("Hello REYNALDI PRIATNA");
});

test("Comment", async () => {
  const helloTemplate = await fs
    .readFile("./templates/comment.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Reynaldi Priatna",
  });
  console.info(data);
  expect(data).toContain("Reynaldi Priatna");
  expect(data).not.toContain("Ini Komentar");
});

test("Partials", async () => {
  const contentTemplate = await fs
    .readFile("./templates/content.mustache")
    .then((data) => data.toString());
  const headerTemplate = await fs
    .readFile("./templates/header.mustache")
    .then((data) => data.toString());
  const footerTemplate = await fs
    .readFile("./templates/footer.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(
    contentTemplate,
    {
      title: "Reynaldi Priatna",
      content: "Belajar Mustache JS",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    }
  );

  console.info(data);
  expect(data).toContain("Reynaldi Priatna");
  expect(data).toContain("Belajar Mustache JS");
  expect(data).toContain("Powered by Reynaldi Priatna");
});
