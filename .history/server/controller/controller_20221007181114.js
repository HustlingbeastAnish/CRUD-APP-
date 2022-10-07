var Userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

  // new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      //res.send(data)
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};
//To retreive and return all users and to return a single user
exports.find = (req, res) => {
  Userdb.find().then((user) => {
    res.send(user);
  });
};

// To Update a new identified user by the user id
exports.update = (req, res) => {};

// To delete a user with identified user id
exports.delete = (req, res) => {};
