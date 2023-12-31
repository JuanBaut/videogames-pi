require("dotenv").config();
const { filteredGenres } = require("../utils/filter.cjs");

export default filteredGenresHanlder = (req, res) => {
  res.status(200).json(filteredGenres);
};
