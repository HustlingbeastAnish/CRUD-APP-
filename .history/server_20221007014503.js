const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

const app = express();

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 8080;

//Logg Requests
app.use(morgan("tiny"));

//Parse Request to Body Parser
app.use(bodyparser.urlencoded({ extended: true }));

// Set the veiw engine
app.set("view engine", "ejs");

//Load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// If we create another file in which we are going to place the view engines
// in that case we need to inform express about where is the actual location
// of folder of view engine
// Code for that ---> app.set("views",path.resolve(__dirname,"views/ejs"));

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

app.listen(PORT, () => {
  console.log(`The Server is running at http://localhost:${PORT}`);
});
