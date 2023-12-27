const { Games } = require("../db.cjs");

const getGame = async () => {
  return await Games.findAll();
};

const createGame = async (
  name,
  description,
  platforms,
  imageUrl,
  releaseDate,
  rating,
) => {
  const game = await Games.create({
    name,
    description,
    platforms,
    imageUrl,
    releaseDate,
    rating,
  });

  return game;
};

module.exports = { createGame, getGame };
