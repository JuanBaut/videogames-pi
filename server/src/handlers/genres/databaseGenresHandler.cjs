require("dotenv").config();
const { genres } = require("../controllers/genresController.cjs");

export default databaseGenresHandler = async (req, res) => {
  try {
    const databaseGenres = await genres();
    res.status(200).json(databaseGenres);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
