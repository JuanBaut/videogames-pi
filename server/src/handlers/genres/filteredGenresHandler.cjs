require("dotenv").config();
const { filteredGenres } = require("../../utils/filter.cjs");

const filteredGenresHanlder = (req, res) => {
  res.status(200).json(filteredGenres);
};

module.exports = filteredGenresHanlder;
