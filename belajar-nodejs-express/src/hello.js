import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/rey", (req, res) => {
  res.send("Hello Reynaldi Priatna!");
});

app.listen(3000, () => {
  console.info("Server started at port 3000");
});
