const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  //   res.send(`Welcome To StudyLogger.com`);
  res.render("index");
});

route.get("/add-user", (req, res) => {
  res.render("add_user");
});
route.get("/update-user", (req, res) => {
  res.render("update_user");
});

module.exports = route;
