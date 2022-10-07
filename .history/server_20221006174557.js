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
app.get("/", (req, res) => {
  res.send(`Welcome To StudyLogger.com`);
});

app.listen(PORT, () => {
  console.log(`The Server is running at http://localhost:${PORT}`);
});
