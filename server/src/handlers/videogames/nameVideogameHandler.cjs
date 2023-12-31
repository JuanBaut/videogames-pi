require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { searchGame } = require("../controllers/videogameController.cjs");

export default nameVideogameHandler = async (req, res) => {
  const name = req.params.name;
  const url = `https://api.rawg.io/api/games?search=${name}`;

  try {
    const databaseResults = await searchGame(name);

    const response = await axios.get(url, {
      params: { key: API_KEY },
    });

    const apiResults = response.data;

    const apiCount = apiResults.count;
    const dbCount = databaseResults.length;

    const mergedData = {
      ...databaseResults,
      ...apiResults.results.map((game) => ({
        id: game.id,
        name: game.name,
        imageUrl: game.background_image,
        genres: game.genres.map((genre) => ({
          id: genre.id,
          name: genre.name,
        })),
      })),
    };

    res.status(200).json({
      count: { database: dbCount, api: apiCount, total: dbCount + apiCount },
      mergedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
