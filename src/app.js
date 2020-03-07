const express = require("express");
const app = express();

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.listen(3005);
