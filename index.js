"use strict";
const express = require("express");
const app = express();
const router = require("./routes");
const userRouter = require("./routes/users.js");
const { notFound } = require("./middleware/index.js");
const PORT = 3000;

app.use(express.json());

app.use(router);

app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
