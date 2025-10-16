const express = require("express");
const fs = require("fs");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");
// set path for view engine to look for html resources => app.set("views", "/resource-path")

// listen for requests
app.listen(3000);

// routing - get request
app.get("/", (req, res) => {
  res.render("index");
  //   res.sendFile("./views/index.html", { root: __dirname });
  //   res.send("<p>Homepage</p>");
});

app.get("/about", (req, res) => {
  res.render("about")
  // res.sendFile("./views/about.html", { root: __dirname });
  //   res.send("<p>Homepage</p>");
});

app.get("/blog/create", (req, res) => {
  res.render("create");
})

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  // this .use() executes for every URL, thus none of the code below will excute
  // !!!!ALWAYS KEEP THIS AT THE BOTTOM OF THE SCRIPT!!!!
  res.status(404).render("404")
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
});
