const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./public/models/blog.js");

// express app
const app = express();

// connection to mongodb
const dbURI =
  "mongodb+srv://:@cluster0.tedzxy3.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=Cluster0";

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

// routing - get request
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result})
    })
    .catch((err) => console.log(err))
  // Older way of liking html
  // res.sendFile("./views/index.html", { root: __dirname });
  // res.send("<p>Homepage</p>");
});

app.get("/blog/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

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