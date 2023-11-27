import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  if (req.query.name) {
    res.status(200).send(`Hello ${req.query.name}`);
  } else {
    res.status(400).end();
  }
});

test("Test Response Status", async () => {
  let respone = await request(app).get("/").query({ name: "Reynaldi" });
  expect(respone.status).toBe(200);
  expect(respone.text).toBe("Hello Reynaldi");

  respone = await request(app).get("/");
  expect(respone.status).toBe(400);
});
