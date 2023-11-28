import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/contoh.txt");
});

test("Test Response", async () => {
  const respone = await request(app).get("/");
  expect(respone.text).toContain("This is sample text");
});
