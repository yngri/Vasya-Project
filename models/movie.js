const Joi = require("joi");
const mongoose = require("mongoose");
const { Genre } = require("./genre");

const Movie = mongoose.model(
  "Movies",
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
      },
      genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
      },
    },
    { timestamps: true }
  )
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(2).max(100).required(),
    genreId: Joi.string().required(),
  };
  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
