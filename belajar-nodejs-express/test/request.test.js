import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

test("Test Express JS", async () => {
  const respone = await request(app).get("/");
  expect(respone.text).toBe("Hello World!");
});
