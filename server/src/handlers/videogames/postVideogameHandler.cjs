require("dotenv").config();
const { createGame } = require("../controllers/videogameController.cjs");

const postVideogameHandler = async (req, res) => {
  const {
    name,
    description,
    platforms,
    imageUrl,
    releaseDate,
    rating,
    genresIds,
  } = req.body;

  try {
    const response = await createGame(
      name,
      description,
      platforms,
      imageUrl,
      releaseDate,
      rating,
      genresIds,
    );
    res.status(200).json(response);
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = postVideogameHandler;
