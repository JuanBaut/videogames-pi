const {
  idVideogameHandler,
  nameVideogameHandler,
  postVideogameHandler,
  databaseGamesHandler,
  apiGamesHandler,
} = require("../handlers/videogameHandler.cjs");

const { Router } = require("express");
const videogameRouter = Router();

videogameRouter.get("/", apiGamesHandler);
videogameRouter.get("/database", databaseGamesHandler);
videogameRouter.get("/id/:id?", idVideogameHandler);
videogameRouter.get("/search/:name?", nameVideogameHandler);
videogameRouter.post("/create", postVideogameHandler);

module.exports = videogameRouter;
