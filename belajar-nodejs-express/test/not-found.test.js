import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello Response`);
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found Bro");
});

test("Test Response", async () => {
  const respone = await request(app).get("/halaman-tidak-ada");
  expect(respone.status).toBe(404);
  expect(respone.text).toBe("404 Not Found Bro");
});
