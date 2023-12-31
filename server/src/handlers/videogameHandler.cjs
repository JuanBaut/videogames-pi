require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const {
  searchGameId,
  searchGame,
  createGame,
  games,
} = require("../controllers/videogameController.cjs");

const databaseGamesHandler = async (req, res) => {
  try {
    databaseGames = await games();
    res.status(200).json(databaseGames);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const apiGamesHandler = async (req, res) => {
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

    res.status(200).json(filteredGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const mergedGamesHandler = async (req, res) => {
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

const idVideogameHandler = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const url = "https://api.rawg.io/api/games/" + id;

  try {
    let matchingGame;

    try {
      matchingGame = await searchGameId(id);
    } catch (databaseError) {
      console.error("Database error:", databaseError);
    }

    if (!matchingGame) {
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

const nameVideogameHandler = async (req, res) => {
  const name = req.params.name;
  const url = `https://api.rawg.io/api/games?search=${name}`;

  try {
    const databaseResults = await searchGame(name);

    const response = await axios.get(url, {
      params: { key: API_KEY },
    });

    const resultsRaw = response.data;

    const resultsFiltered = {
      count: resultsRaw.count + databaseResults.length,
      results: [
        ...databaseResults,
        ...resultsRaw.results.map((game) => ({
          id: game.id,
          name: game.name,
          imageUrl: game.background_image,
          genres: game.genres.map((genre) => ({
            id: genre.id,
            name: genre.name,
          })),
        })),
      ],
    };

    res.status(200).json(resultsFiltered);
  } catch (error) {
    console.error(error);
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
  databaseGamesHandler,
  apiGamesHandler,
  mergedGamesHandler,
  idVideogameHandler,
  nameVideogameHandler,
  postVideogameHandler,
};
