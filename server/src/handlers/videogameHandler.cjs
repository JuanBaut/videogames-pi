require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

const getVideogameHandler = async (req, res) => {
  const url = "https://api.rawg.io/api/games";

  try {
    const response = await axios.get(url, { params: { key: API_KEY } });
    const videogames = response.data;

    res.status(200).json(videogames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const idVideogameHandler = async (req, res) => {
  const id = req.params.id;
  const url = "https://api.rawg.io/api/games/" + id;

  try {
    const response = await axios.get(url, {
      params: { key: API_KEY },
    });
    const gameById = response.data;
    res.status(200).json(gameById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const nameVideogameHandler = async (req, res) => {
  const name = req.params.name;
  const url = `https://api.rawg.io/api/games?search=${name}`;

  try {
    const response = await axios.get(url, {
      params: { key: API_KEY },
    });

    const gameFound = response.data;

    if (!gameFound) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.status(200).json(gameFound);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postVideogameHandler = (req, res) => {
  // i need to start coding whatever is supposed to be here
};

module.exports = {
  getVideogameHandler,
  idVideogameHandler,
  nameVideogameHandler,
  postVideogameHandler,
};
