require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { games } = require("../../controllers/videogameController.cjs");

const mergedVideogameHandler = async (req, res) => {
  const gamesUrl = "https://api.rawg.io/api/games?page_size=100";

  try {
    const response = await axios.get(gamesUrl, { params: { key: API_KEY } });
    const apiGames = response.data;

    const filteredApiGames = apiGames.results.map((game) => ({
      id: game.id,
      name: game.name,
      imageUrl: game.background_image,
      genres: game.genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
      rating: game.rating,
    }));

    databaseGames = await games();

    const mergedGames = [...databaseGames, ...filteredApiGames];

    const dbCount = databaseGames.length;
    const apiCount = filteredApiGames.length;

    res.status(200).json({
      count: { database: dbCount, api: apiCount, total: dbCount + apiCount },
      mergedGames,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = mergedVideogameHandler;
