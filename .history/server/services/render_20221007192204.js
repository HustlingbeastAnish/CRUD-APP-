const axios = require("axios ");

// This file will contain all the render statements
exports.homeRoutes = (req, res) => {
  axios.get("http://localhost:3000/api/users").then(function (response) {
    res.render("index", { users: response.data });
  });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  res.render("update_user");
};
