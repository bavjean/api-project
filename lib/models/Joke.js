const mongoose = require("../db/connection");

module.exports = mongoose.model(
  "Joke",
  new mongoose.Schema({
    id: {
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    joke: {
      type: String,
      required: true,
    },
    categories: [String],
  })
);
