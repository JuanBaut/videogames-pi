const {
  getVideogameHandler,
  idVideogameHandler,
  nameVideogameHandler,
  postVideogameHandler,
} = require("../handlers/videogameHandler.cjs");

const { Router } = require("express");
const videogameRouter = Router();

videogameRouter.get("/", getVideogameHandler);
videogameRouter.get("/id/:id?", idVideogameHandler);
videogameRouter.get("/search/:name?", nameVideogameHandler);
videogameRouter.post("/create", postVideogameHandler);

module.exports = videogameRouter;
