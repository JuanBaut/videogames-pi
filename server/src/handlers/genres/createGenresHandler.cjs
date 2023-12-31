require("dotenv").config();
const { createGenres } = require("../controllers/genresController.cjs");

export default createGenresHandler = async (req, res) => {
  const data = req.body;

  try {
    const response = await createGenres(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
