const ejs = require("ejs");
const { Movie } = require("../models/movie");
const { Genre } = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
  run();

  async function run() {
    const genreArr = await Genre.find({});
    const movie = await Movie.findById(req.query.id);

    res.render("updateMovie", { movie: movie, genre: genreArr });
  }
});

router.put("/", async (req, res) => {
  const genre = await Genre.findById(req.body.genre);
  if (!genre) return res.status(400).send("Invalid genre.");

  var query = { _id: req.body.movieId };

  const movie = await Movie.findOneAndUpdate(
    query,
    {
      title: req.body.title,
      genre: req.body.genre,
    },
    { new: true }
  );

  res.sendStatus(200);
});

/*
POST

1. get record ID from request body;
2. make a call to Mongo to get a record from this ID
3. pass the record object to .ejs form as a parameter
4. create am .ejs form that populates fields based on record object passed to it
5. from the POST method, return newly created .ejs

*/

module.exports = router;
