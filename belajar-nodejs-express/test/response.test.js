import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello Response`);
});

test("Test Response", async () => {
  const respone = await request(app).get("/");
  expect(respone.text).toBe("Hello Response");
});
