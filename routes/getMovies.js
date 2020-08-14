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

router.put("/:id", async (req, res) => {
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        name: genre.name,
        _id: genre.id,
      },
    },
    { new: true }
  );
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

module.exports = router;
