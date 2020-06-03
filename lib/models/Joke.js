const mongoose = require("../db/connection");

module.exports = mongoose.model(
  "Joke",
  new mongoose.Schema({
    id: Number,
    joke: String,
    categories: [String],
  })
);
