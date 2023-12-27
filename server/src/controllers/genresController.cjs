const { Genres } = require("../db.cjs");

const createGenres = async (data) => {
  return await Genres.bulkCreate(data, { returning: true, validate: false });
};

module.exports = { createGenres };
