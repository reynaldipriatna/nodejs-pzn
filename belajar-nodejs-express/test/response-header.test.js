import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res
    .set({
      "X-Powered-By": "Reynaldi Priatna",
      "X-Author": "Reynaldi",
    })
    .send(`Hello Response`);
});

test("Test Response", async () => {
  const respone = await request(app).get("/");
  expect(respone.text).toBe("Hello Response");
  expect(respone.get("X-Powered-By")).toBe("Reynaldi Priatna");
  expect(respone.get("X-Author")).toBe("Reynaldi");
});
