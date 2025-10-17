const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes.js")

// express app
const app = express();

// connection to mongodb
const dbURI =
  "mongodb+srv://new-user_31:QUjH6AqCEJ8zGJpu@cluster0.tedzxy3.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(dbURI)
  .then((result) => {
    // listen for requests
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// register view engine
// set path for view engine to look for html resources => app.set("views", "/resource-path")
app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // helps with parsing data during post

// routing - get request
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirects
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about-us", (req, res, route) => {
  res.redirect(route);
});

// blog routes
app.use("/blogs", blogRoutes)

// 404 page
app.use((req, res) => {
  // this .use() executes for every URL, thus none of the code below will excute
  // !!!!ALWAYS KEEP THIS AT THE BOTTOM OF THE SCRIPT!!!!
  res.status(404).render("404", { title: "Not Found" });
});

