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
      res.render("getMovies", {
        moviesArray: result,
      });
    });
});

router.post("/", async (req, res) => {
  const movieIdArray = { _id: { $in: req.body.movieIdArray } };
  console.log(movieIdArray);
  await Movie.deleteMany(movieIdArray, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

var dateStr = "Tue Aug 25 2020 17:02:11 GMT-0400 (Eastern Daylight Time)";

module.exports = router;
