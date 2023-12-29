require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const {
  getGame,
  createGame,
} = require("../controllers/videogameController.cjs");

const getVideogameHandler = async (req, res) => {
  const gamesUrl = "https://api.rawg.io/api/games?page_size=100";

  try {
    const response = await axios.get(gamesUrl, { params: { key: API_KEY } });
    const rawGames = response.data;

    const filteredGames = rawGames.results.map((game) => ({
      id: game.id,
      name: game.name,
      image: game.background_image,
      genres: game.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
    }));

    res.status(200).json(filteredGames);
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

    const resultsRaw = response.data;

    const resultsFiltered = {
      count: resultsRaw.count,
      results: resultsRaw.results.map((game) => ({
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres.map((genre) => ({
          id: genre.id,
          name: genre.name,
        })),
      })),
    };

    if (resultsFiltered.count == 0) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.status(200).json(resultsFiltered);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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

module.exports = {
  getVideogameHandler,
  idVideogameHandler,
  nameVideogameHandler,
  postVideogameHandler,
};
