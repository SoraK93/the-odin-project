const express = require("express")
const { links } = require("../db")

const router = express.Router()

router.get("/", (req, res) => res.render("about", {links}))

module.exports = router