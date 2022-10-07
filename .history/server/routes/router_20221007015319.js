const express = require("express");
const route = express.Router();

app.get("/", (req, res) => {
  //   res.send(`Welcome To StudyLogger.com`);
  res.render("index");
});

app.get("/add-user", (req, res) => {
  res.render("add_user");
});
app.get("/update-user", (req, res) => {
  res.render("update_user");
});
