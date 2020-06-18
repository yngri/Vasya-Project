var path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  //res.send("Hello World");
  res.sendFile(path.resolve("views/test.html"));
});

module.exports = router;
