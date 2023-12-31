require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

export default apiGenresHandle = async (req, res) => {
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
