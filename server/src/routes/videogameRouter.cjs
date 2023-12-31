import mergedVideogameHandler from "../handlers/videogames/mergedVideogameHandler.cjs";
import databaseGenresHandler from "../handlers/genres/genresHandler.cjs";
import apiVideogameHandler from "../handlers/videogames/apiVideogameHandler.cjs";
import idVideogameHandler from "../handlers/videogames/idVideogameHandler.cjs";
import nameVideogameHandler from "../handlers/videogames/nameVideogameHandler.cjs";
import postVideogameHandler from "../handlers/videogames/postVideogameHandler.cjs";

const mergedVideogameHandler = require("../handlers/videogames/mergedVideogameHandler.cjs")
const  = require("../handlers/videogames/mergedVideogameHandler.cjs")

const { Router } = require("express");
const videogameRouter = Router();

videogameRouter.get("/", mergedVideogameHandler);
videogameRouter.get("/database", databaseGenresHandler);
videogameRouter.get("/api", apiVideogameHandler);
videogameRouter.get("/id/:id?", idVideogameHandler);
videogameRouter.get("/search/:name?", nameVideogameHandler);
videogameRouter.post("/create", postVideogameHandler);

module.exports = videogameRouter;
