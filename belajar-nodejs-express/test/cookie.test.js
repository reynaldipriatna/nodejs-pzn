import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/" });
  res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
  const respone = await request(app)
    .get("/")
    .set("Cookie", "name=Reynaldi;author=Reynaldi Priatna");
  expect(respone.text).toBe("Hello Reynaldi");
});

test("Test Cookie Write", async () => {
  const respone = await request(app).post("/login").send({ name: "Reynaldi" });
  expect(respone.get("Set-Cookie").toString()).toBe("Login=Reynaldi; Path=/");
  expect(respone.text).toBe("Hello Reynaldi");
});
