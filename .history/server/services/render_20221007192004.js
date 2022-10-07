const axios = require("axios ");
// This file will contain all the render statements
exports.homeRoutes = (req, res) => {
  res.render("index", { users: "HeyBoi" });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  res.render("update_user");
};
