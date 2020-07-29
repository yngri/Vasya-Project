const ejs = require("ejs");
var path = require("path");
const { Movie } = require("../models/movie");
const { Genre } = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  Genre.find({}, function (err, result) {
    // console.log(result);

    res.render("addMovie", {
      title: "Movies App",
      message: "Best Movie db",
      genre: result,
    });
  });
});

router.post("/handleMovieSubmit", async (req, res) => {
  const genre = await Genre.findById(req.body.genreId);
  console.log(req.body);
  // if (!genre) return res.status(400).send("Invalid genre.");

  let movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
  });
  movie = await movie.save();

  res.send(movie);
});

module.exports = router;
