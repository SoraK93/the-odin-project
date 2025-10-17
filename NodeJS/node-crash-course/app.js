const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog.js");

// express app
const app = express();

// connection to mongodb
const dbURI =
  "mongodb+srv://@cluster0.tedzxy3.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=Cluster0";

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

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// routing - get data from db and render it
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
});

// routing - post request
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => console.log(err));
});

// delete request
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// 404 page
app.use((req, res) => {
  // this .use() executes for every URL, thus none of the code below will excute
  // !!!!ALWAYS KEEP THIS AT THE BOTTOM OF THE SCRIPT!!!!
  res.status(404).render("404", { title: "Not Found" });
});

// const blogs = [
//   {
//     title: "Yoshi finds eggs",
//     snippet: "Lorem ipsum dolor sit amet consectetur.",
//   },
//   {
//     title: "Mario find stars",
//     snippet: "Lorem ipsum dolor sit amet consectetur.",
//   },
//   {
//     title: "How to defeat bowser",
//     snippet: "Lorem ipsum dolor sit amet consectetur.",
//   },
// ];
// res.render("index", { title: "Home", blogs });

// // mongoose and mongo sandbox routes
// // adds data to db
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// // get all data from db
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })

// // get specific data from db
// app.get("/single-blog", (req, res) => {
//   Blog.findById("68f1ab13c50696077db3b0ce")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err))
// })
