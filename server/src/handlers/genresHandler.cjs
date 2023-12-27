require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { createGenres } = require("../controllers/genresController.cjs");
const { filteredGenres } = require("../utils/filter.cjs");

const getGenresHandler = async (req, res) => {
  const url = "https://api.rawg.io/api/genres";

  try {
    const response = await axios.get(url, { params: { key: API_KEY } });
    const genres = response.data;

    res.status(200).json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const filteredGenresHanlder = (req, res) => {
  res.status(200).json(filteredGenres);
};

const createGenresHandler = async (req, res) => {
  const data = req.body;

  try {
    const response = await createGenres(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGenresHandler,
  createGenresHandler,
  filteredGenresHanlder,
};
