const { Router } = require("express");
const { links, users } = require("../db")

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { message: "EJS Rocks!", links, users })
);
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`Index ID: ${indexId}`);
});

module.exports = indexRouter;
