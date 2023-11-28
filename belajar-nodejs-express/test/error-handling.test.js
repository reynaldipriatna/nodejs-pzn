import express from "express";
import request from "supertest";

const app = express();

const errorMiddileware = (err, req, res, next) => {
  res.status(500).send(`Terjadi Kesalahan : ${err.message}`);
};

app.get("/", (req, res) => {
  throw new Error("Ups");
});

app.use(errorMiddileware);

test("Test Error Handling", async () => {
  const respone = await request(app).get("/");
  expect(respone.status).toBe(500);
  expect(respone.text).toBe("Terjadi Kesalahan : Ups");
});
