require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { games } = require("../../controllers/videogameController.cjs");

const mergedVideogameHandler = async (req, res) => {
  const gamesUrl = "https://api.rawg.io/api/games?page_size=100";

  try {
    const response = await axios.get(gamesUrl, { params: { key: API_KEY } });
    const rawGames = response.data;

    const filteredGames = rawGames.results.map((game) => ({
      id: game.id,
      name: game.name,
      imageUrl: game.background_image,
      genres: game.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
    }));

    databaseGames = await games();

    const mergedGames = [...databaseGames, ...filteredGames];

    const dbCount = databaseGames.length;
    const apiCount = filteredGames.length;

    res.status(200).json({
      count: { database: dbCount, api: apiCount, total: dbCount + apiCount },
      mergedGames,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = mergedVideogameHandler;
