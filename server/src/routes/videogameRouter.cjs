const {
  idVideogameHandler,
  nameVideogameHandler,
  postVideogameHandler,
  databaseGamesHandler,
  apiGamesHandler,
  mergedGamesHandler,
} = require("../handlers/videogameHandler.cjs");

const { Router } = require("express");
const videogameRouter = Router();

videogameRouter.get("/", mergedGamesHandler);
videogameRouter.get("/database", databaseGamesHandler);
videogameRouter.get("/api", apiGamesHandler);
videogameRouter.get("/id/:id?", idVideogameHandler);
videogameRouter.get("/search/:name?", nameVideogameHandler);
videogameRouter.post("/create", postVideogameHandler);

module.exports = videogameRouter;
