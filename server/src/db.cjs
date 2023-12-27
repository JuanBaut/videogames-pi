require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const videogameModel = require("./models/videogameModel.cjs");
const genresModel = require("./models/genresModel.cjs");
const junctionModel = require("./models/junctionModel.cjs");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
  {
    logging: false,
    native: false,
  },
);

videogameModel(sequelize);
genresModel(sequelize);
junctionModel(sequelize);

const { Games, Genres, Junction } = sequelize.models;

Games.belongsToMany(Genres, {
  through: Junction,
  foreignKey: "GamesId",
});

Genres.belongsToMany(Games, {
  through: Junction,
  foreignKey: "GenresId",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
