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
  const blogs = [
    {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur."  },
    {title: "Mario find stars", snippet: "Lorem ipsum dolor sit amet consectetur."  },
    {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur."  }
  ]
  res.render("index", { title: "Home", blogs });
  //   res.sendFile("./views/index.html", { root: __dirname });
  //   res.send("<p>Homepage</p>");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
  // res.sendFile("./views/about.html", { root: __dirname });
  //   res.send("<p>Homepage</p>");
});

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  // this .use() executes for every URL, thus none of the code below will excute
  // !!!!ALWAYS KEEP THIS AT THE BOTTOM OF THE SCRIPT!!!!
  res.status(404).render("404", { title: "Not Found" });
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
});
