const { games } = require("../../controllers/videogameController.cjs");

export default databaseGamesHandler = async (req, res) => {
  try {
    databaseGames = await games();
    res.status(200).json(databaseGames);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
