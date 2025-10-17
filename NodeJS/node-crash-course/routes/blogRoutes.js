const express = require("express");
const blogController = require("../controllers/blogController")

// express app
const router = express.Router();

// routing - get data from db and render it
router.get("/", blogController.blog_index);
// routing - post request
router.post("/", blogController.blog_create_post);
// routing - get request
router.get("/create", blogController.blog_create_get);
router.get("/:id", blogController.blog_details);
// delete request
router.delete("/:id", blogController.blog_delete);

// exporting all our route handlers to app.js
module.exports = router;