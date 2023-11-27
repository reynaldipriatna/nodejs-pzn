import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.info(`Receive request : ${req.method} ${req.originalUrl}`);
  next();
};

const addPoweredHeader = (req, res, next) => {
  res.header("X-Powered-By", "Reynaldi Priatna");
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
};

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Response");
});

app.get("/rey", (req, res) => {
  res.send("Hello Reynaldi");
});

app.get("/time", (req, res) => {
  res.send(`Hello, Today is ${req.requestTime}`);
});

test("Test Response Middleware", async () => {
  const respone = await request(app).get("/").query({ apiKey: "123" });
  expect(respone.get("X-Powered-By")).toBe("Reynaldi Priatna");
  expect(respone.text).toBe("Hello Response");
});

test("Test Response Middleware 2", async () => {
  const respone = await request(app).get("/rey").query({ apiKey: "5432" });
  expect(respone.get("X-Powered-By")).toBe("Reynaldi Priatna");
  expect(respone.text).toBe("Hello Reynaldi");
});

test("Test Response Middleware Unauthorized", async () => {
  const respone = await request(app).get("/no-api-key");
  expect(respone.status).toBe(401);
});

test("Test Response Middleware Time", async () => {
  const respone = await request(app).get("/time").query({ apiKey: "123" });
  expect(respone.get("X-Powered-By")).toBe("Reynaldi Priatna");
  expect(respone.text).toContain("Hello, Today is");
});
