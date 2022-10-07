const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`Welcome To StudyLogger.com`);
});

app.listen(3000, () => {
  console.log(`The Server is running at http://localhost:${3000}`);
});
