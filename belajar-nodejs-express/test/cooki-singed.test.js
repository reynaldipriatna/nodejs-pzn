import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser("SECRETKEY"));

app.get("/", (req, res) => {
  const name = req.signedCookies["Login"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("Login", name, { path: "/", signed: true });
  res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
  const respone = await request(app)
    .get("/")
    .set(
      "Cookie",
      "Login=s%3AReynaldi.xQ3PRiCCdSg4XqF8mhpMLMHh9N2c718aDXftHm6Cp1o; Path=/"
    );
  expect(respone.text).toBe("Hello Reynaldi");
});

test("Test Cookie Write", async () => {
  const respone = await request(app).post("/login").send({ name: "Reynaldi" });
  console.info(respone.get("Set-Cookie"));
  expect(respone.get("Set-Cookie").toString()).toContain("Reynaldi");
  expect(respone.text).toBe("Hello Reynaldi");
});
