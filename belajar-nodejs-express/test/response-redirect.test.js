import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/to-next-page");
});

test("Test Response Redirect", async () => {
  const respone = await request(app).get("/");
  expect(respone.status).toBe(302);
  expect(respone.get("Location")).toBe("/to-next-page");
});
