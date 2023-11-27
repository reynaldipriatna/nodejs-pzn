import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}!`);
});

test("Test Request HTTP", async () => {
  const respone = await request(app).get("/").query({ name: "Reynaldi" });
  expect(respone.text).toBe("Hello Reynaldi!");
});
