const mongoose = require("mongoose");
const addMovie = require("./routes/addMovie");
const getMovies = require("./routes/getMovies");
const quotes = require("./routes/quotes");
const movies = require("./routes/movies");
const genres = require("./routes/genres");
const express = require("express");
const app = express();

// Added by Max
const { Movie, validate } = require("./models/movie");

app.set("view engine", "ejs");
app.set("views", "./views"); // overrides the default path to location with the templates (views)

const connectionString =
  "mongodb+srv://admin:admin@cluster0-mtnrw.mongodb.net/prototypedb?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/movies", movies);
app.use("/api/genres", genres);
app.use("/api/addMovie", addMovie);
app.use("/api/getMovies", getMovies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// console.log("it's alive");

// async function getAllMovies() {
//   const allMovies = await Movie.find().populate("genre");
//   console.log(allMovies);
// }

// getAllMovies();
