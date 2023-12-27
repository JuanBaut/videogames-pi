const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "genres.json");

const data = fs.readFileSync(jsonPath, "utf8");

const jsonData = JSON.parse(data);

const genres = jsonData.genres;

const filteredGenres = genres.map((item) => {
  return {
    id: item.id,
    name: item.name,
  };
});

module.exports = { genres, filteredGenres };
