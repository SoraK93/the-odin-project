const express = require("express");
const fs = require("fs");

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname })
//   res.send("<p>Homepage</p>");
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname })
//   res.send("<p>Homepage</p>");
});
