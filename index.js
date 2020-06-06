const express = require("express");
const app = express();
const cors = require("cors");
const Joke = require("./lib/models/Joke");

app.use(express.json());
app.use(cors());

// Redirect
app.get("/", (req, res) => {
  let url = "http://localhost:3000/jokes";
  res.redirect(url);
});

// Get all jokes
app.get("/jokes", (req, res) => {
  Joke.find({}).then((data) => {
    res.json(data);
  });
});

// Get joke by id
app.get("/jokes/:id", (req, res) => {
  let id = req.params.id;
  Joke.find({ id: id }).then((data) => {
    res.json(data);
  });
});

// Get random joke
app.get("/random", (req, res) => {
  Joke.countDocuments().then((count) => {
    let random = Math.floor(Math.random() * count);
    Joke.findOne()
      .skip(random)
      .then((data) => {
        res.json(data);
      });
  });
});

// Get jokes filtered by category
app.get("/jokes/category/:category", (req, res) => {
  let category = req.params.category;
  Joke.find({ categories: [category] }).then((data) => {
    res.json(data);
  });
});

// Create
app.post("/jokes", (req, res) => {
  let list = req.body;
  Joke.create(list)
    .then((list) => res.json(list))
    .catch((err) => console.log("Error :", err));
});

// Update
app.put("/jokes/:id", (req, res) => {
  let id = req.params.id;
  Joke.findOneAndUpdate({ id: id }, req.body, {
    new: true,
  }).then((updatedData) => res.json(updatedData));
});

// Delete
app.delete("/jokes/:id", (req, res) => {
  let id = req.params.id;
  Joke.findOneAndDelete({ id: id })
    .then((list) => res.json(list))
    .catch((err) => console.log("Error: ", err));
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
