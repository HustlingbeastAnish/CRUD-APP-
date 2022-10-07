const express = require("express");
const route = express.Router();

const services = require("../services/render");

// @description Root Route
// @method GET /
route.get("/", services.homeRoutes);

// @description add user
// @method GET /add_user
route.get("/add-user", services.add_user);

// @description update user
// @method GET /update_user
route.get("/update-user", services.update_user);

// API request
route.post("api/users", controller.create);

route.get("api/users", controller.find);
route.post("api/users", controller.create);
route.post("api/users", controller.create);

module.exports = route;
