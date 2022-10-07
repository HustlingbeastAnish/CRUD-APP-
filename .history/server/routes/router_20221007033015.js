const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

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

// To get a user
route.get("/api/users", controller.find);

// To put a value of a user
route.put("/api/users/:id", controller.update);

// To delete the value of a user with a identified id
route.delete("/api/users/:id", controller.delete);

module.exports = route;
