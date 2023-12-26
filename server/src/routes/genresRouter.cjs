const { getGenresHandler } = require("../handlers/genresHandler.cjs");

const { Router } = require("express");
const genresRouter = Router();

genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;
