const mongoose = require("../db/connection");

module.exports = mongoose.model(
  "Joke",
  new mongoose.Schema({
    id: {
      type: String,
      unique: true,
    },
    joke: {
      type: String,
      required: true,
    },
    categories: [String],
  })
);
