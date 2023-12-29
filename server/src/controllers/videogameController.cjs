const { Games, Genres } = require("../db.cjs");

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
  genresIds,
) => {
  const validGenres = await Genres.findAll({
    where: { id: genresIds },
  });

  if (validGenres.length != genresIds.length) {
    throw new Error("Invalid genres IDs provided");
  }

  const game = await Games.create({
    name,
    description,
    platforms,
    imageUrl,
    releaseDate,
    rating,
  });

  await game.addGenres(genresIds);
  return game;
};

module.exports = { createGame, getGame };
