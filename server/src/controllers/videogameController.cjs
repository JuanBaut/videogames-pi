const { Games, Genres } = require("../db.cjs");
const { Op } = require("sequelize");

const games = async () => {
  try {
    const dbGames = await Games.findAll({ include: [Genres] });

    const result = dbGames.map((game) => ({
      id: game.id,
      name: game.name,
      imageUrl: game.imageUrl,
      genres: game.Genres.map((genre) => ({
        id: genre.id,
        name: genre.name,
      })),
      rating: game.rating,
    }));

    return result;
  } catch (error) {
    throw error;
  }
};

const searchGame = async (name) => {
  try {
    const result = await Games.findAll({
      where: {
        name: {
          [Op.like]: "%" + name + "%",
        },
      },
      include: [Genres],
    });
    return result;
  } catch (error) {
    throw error;
  }
};

const searchGameId = async (id) => {
  try {
    const result = await Games.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};

const createGame = async (
  name,
  description,
  platforms,
  background_image,
  released,
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
    background_image,
    released,
    rating,
  });

  await game.addGenres(genresIds);
  return game;
};

module.exports = { searchGameId, searchGame, createGame, games };
