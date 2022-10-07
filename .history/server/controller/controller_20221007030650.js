var UserDb = require("../model/model");

// To create and save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content Cannot be empty " });
  }
};

//To retreive and return all users and to return a single user
exports.find = (req, res) => {};

// To Update a new identified user by the user id
exports.update = (req, res) => {};

// To delete a user with identified user id
exports.delete = (req, res) => {};
