"use strict";

const express = require("express");

const router = express.Router();
const usersRoute = require("./users");

router.get("/", (req, res) => {
  res.send("Hello from the main router!");
});

router.get("/about", (req, res) => {
  res.send("About Us");
});

router.use("/users", usersRoute);

router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  if (userId) {
    res.json({ userId: userId });
  } else {
    res.status(404).res.json({ error: "User Id not found" });
  }
});

module.exports = router;
