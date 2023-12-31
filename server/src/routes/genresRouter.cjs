import apiGenresHandler from "../handlers/genres/apiGenresHandler.cjs";
import databaseGenresHandler from "../handlers/genres/databaseGenresHandler.cjs";
import filteredGenresHandler from "../handlers/genres/filteredGenresHandler.cjs";
import createGenresHandler from "../handlers/genres/createGenresHandler.cjs";

const { Router } = require("express");
const genresRouter = Router();

genresRouter.get("/", apiGenresHandler);
genresRouter.get("/database", databaseGenresHandler);
genresRouter.get("/filter", filteredGenresHandler);
genresRouter.post("/create", createGenresHandler);

module.exports = genresRouter;
