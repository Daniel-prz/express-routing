"use strict";
const express = require("express");
const data = require("../data");

const router = express.Router();

router.get("/users", (req, res) => {
  res.send({ data });
});
router.get("/:id", (req, res) => {
  res.send({ userId: req.params.id });
});
module.exports = router;
