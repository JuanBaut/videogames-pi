const { Genres } = require("../db.cjs");

const genres = async () => {
  try {
    const result = await Genres.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};

const createGenres = async (data) => {
  return await Genres.bulkCreate(data, { returning: true, validate: false });
};

module.exports = { createGenres, genres };
