import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Query Parameter", async () => {
  const respone = await request(app)
    .get("/")
    .query({ firstName: "Reynaldi", lastName: "Priatna" });
  expect(respone.text).toBe("Hello Reynaldi Priatna");
});
