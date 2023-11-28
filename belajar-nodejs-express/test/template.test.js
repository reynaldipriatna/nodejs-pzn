import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    say: "This is a Test",
  });
});

test("Test Response", async () => {
  const respone = await request(app).get("/");
  console.info(respone.text);
  expect(respone.text).toContain("Hello World");
  expect(respone.text).toContain("This is a Test");
});
