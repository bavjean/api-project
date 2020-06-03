const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chuckNorris", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
