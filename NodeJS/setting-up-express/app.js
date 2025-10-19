const express = require("express");
const path = require("node:path")

// start server
const app = express();

// setup views
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// serving static files
app.use(express.static(path.join(__dirname, "public")))

// Setup router
const authorRouter = require("./routes/authorRouter");
app.use("/authors", authorRouter);
const bookRouter = require("./routes/bookRouter");
app.use("/books", bookRouter);
const aboutRouter = require("./routes/aboutRouter")
app.use("/about", aboutRouter)
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});

