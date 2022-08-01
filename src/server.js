const express = require("express");
const cors = require("cors");
const path = require("path");

const { port, url } = require("./config");
const usersApi = require("./routes/users");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/", express.static(__dirname + "/public"));
app.use("/static", express.static(__dirname + "./../memojis"));
app.use("/api/users", usersApi);

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Server is listening on next: ${url}`);
});
