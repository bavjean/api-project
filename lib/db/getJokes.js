let fetch = require("node-fetch");
let fs = require("fs");
const url = "http://api.icndb.com/jokes/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let jsonString = JSON.stringify(data);
    fs.writeFile("./jokes.json", jsonString, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
  });
