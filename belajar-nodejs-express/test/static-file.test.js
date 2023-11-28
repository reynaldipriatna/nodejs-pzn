import express from "express";
import request from "supertest";

const app = express();

app.use(express.static(__dirname + "/static"));
// app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send(`Hello Response`);
});

test("Test Static File", async () => {
  const respone = await request(app).get("/");
  expect(respone.text).toBe("Hello Response");
});

test("Test Static File Contoh.txt", async () => {
  const respone = await request(app).get("/contoh.txt");
  expect(respone.text).toContain("This is sample text");
});
