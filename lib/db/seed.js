const Joke = require("../models/Joke");
const data = require("./jokes.json");

Joke.deleteMany({}).then(() => {
  Joke.create(data)
    .then(() => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
