const http = require("http");
const fs = require("fs");
const lodash = require("lodash");

// creating a server
const server = http.createServer((req, res) => {
  // callback() runs everytime a request is received
  // {req} contains lot of info like request-url, request-type
  // {res} used to send response to the user

  // lodash
  const num = lodash.random(0, 20);
  console.log(num);

  const greet = lodash.once(() => {
    console.log("Hello!")
  })
  greet();

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // routing paths setup
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us": // this creates a redirect to "/about" page
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // response sent - html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      console.log(data);
    }
    // close current response
    res.end();
  });
});

// this makes our server start listening for requests
// localhost takes us to a specific IP address called 'loopback IP address'.
// port number is like a door to anotther computer
server.listen(3000, "localhost", () => {
  // callback runs when we start listening
  console.log("listening for requests on port 3000.");
});


// related to main app.js file. contains alternate code for getting data from mongodb

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