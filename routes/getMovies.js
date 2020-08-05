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
});

router.delete("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.body.movieID);
  if (!movie)
    return res.status(404).send("The movie with the given Id was not found.");

  res.redirect("/getMovies");
});

module.exports = router;
