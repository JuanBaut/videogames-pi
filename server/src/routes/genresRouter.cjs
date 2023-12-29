const {
  createGenresHandler,
  filteredGenresHanlder,
  apiGenresHandler,
  databaseGenresHandler,
} = require("../handlers/genresHandler.cjs");

const { Router } = require("express");
const genresRouter = Router();

genresRouter.get("/", apiGenresHandler);
genresRouter.get("/database", databaseGenresHandler);
genresRouter.get("/filter", filteredGenresHanlder);
genresRouter.post("/create", createGenresHandler);

module.exports = genresRouter;
