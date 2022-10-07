const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Welcome To StudyLogger.com`);
});
