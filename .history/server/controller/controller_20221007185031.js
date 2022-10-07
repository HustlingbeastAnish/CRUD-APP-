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
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send({
        message: err.message || "Error Occured while retrieving the user data",
      });
    });
};

// To Update a new identified user by the user id
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data to be updated cannot be empty" });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update a user with ${id} , Maybe User not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user false Information " });
    });
};

// To delete a user with identified user id
exports.delete = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: " Data to be updated cannot be empty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete the user with ${id} , Maybe Wrong id `,
        });
      } else {
        res.send({
          message: ` The user with the ${id} was deleted successfully`,
        });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "Could not delete the user with the id " });
    });
};
