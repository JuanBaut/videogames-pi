const {
  getGenresHandler,
  createGenresHandler,
  filteredGenresHanlder,
} = require("../handlers/genresHandler.cjs");

const { Router } = require("express");
const genresRouter = Router();

genresRouter.get("/", getGenresHandler);
genresRouter.get("/filter", filteredGenresHanlder);
genresRouter.post("/create", createGenresHandler);

module.exports = genresRouter;
