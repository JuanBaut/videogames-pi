const { games } = require("../../controllers/videogameController.cjs");

const dbVideogamesHandler = async (req, res) => {
  try {
    databaseGames = await games();
    res.status(200).json(databaseGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = dbVideogamesHandler;
