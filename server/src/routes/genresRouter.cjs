const apiGenresHandler = require("../handlers/genres/apiGenresHandler.cjs");
const dbGenresHandler = require("../handlers/genres/dbGenresHandler.cjs");
const filteredGenresHandler = require("../handlers/genres/filteredGenresHandler.cjs");
const createGenresHandler = require("../handlers/genres/createGenresHandler.cjs");

const { Router } = require("express");
const genresRouter = Router();

genresRouter.get("/", apiGenresHandler);
genresRouter.get("/database", dbGenresHandler);
genresRouter.get("/filter", filteredGenresHandler);
genresRouter.post("/create", createGenresHandler);

module.exports = genresRouter;
