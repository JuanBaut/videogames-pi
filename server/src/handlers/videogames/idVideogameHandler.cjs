require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { searchGameId } = require("../../controllers/videogameController.cjs");
const { validate } = require("uuid");

const idVideogameHandler = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const url = "https://api.rawg.io/api/games/" + id;

  try {
    let matchingGame;

    let isUuid = validate(id);

    if (isUuid) {
      try {
        matchingGame = await searchGameId(id);
      } catch (databaseError) {
        console.error("Database error:", databaseError);
      }
    } else {
      const response = await axios.get(url, {
        params: { key: API_KEY },
      });
      matchingGame = response.data;
    }

    res.status(200).json(matchingGame);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = idVideogameHandler;
