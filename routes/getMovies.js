const ejs = require("ejs");
var path = require("path");
const { Movie } = require("../models/movie");
const { Genre } = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  Movie.find({})
    .populate("genre")
    .exec(function (err, result) {
      console.log(result);

      res.render("getMovies", {
        moviesArray: result,
      });
    });

  // Movie.find({}, function (err, result) {
  //   console.log(result);

  //   res.render("getMovies", {
  //     moviesArray: result,
  //   });
  // });
});

module.exports = router;
