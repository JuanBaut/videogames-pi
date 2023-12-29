const { Games, Genres } = require("../db.cjs");

const games = async () => {
  try {
    const result = await Games.findAll({ include: [Genres] });
    return result;
  } catch (error) {
    throw error;
  }
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

module.exports = { createGame, games };
