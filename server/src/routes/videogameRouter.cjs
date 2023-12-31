const dbVideogamesHandler = require("../handlers/videogames/dbVideogameHandler.cjs");
const mergedVideogameHandler = require("../handlers/videogames/mergedVideogameHandler.cjs");
const apiVideogameHandler = require("../handlers/videogames/apiVideogameHandler.cjs");
const idVideogameHandler = require("../handlers/videogames/idVideogameHandler.cjs");
const nameVideogameHandler = require("../handlers/videogames/nameVideogameHandler.cjs");
const postVideogameHandler = require("../handlers/videogames/postVideogameHandler.cjs");

const { Router } = require("express");
const videogameRouter = Router();

videogameRouter.get("/", mergedVideogameHandler);
videogameRouter.get("/database", dbVideogamesHandler);
videogameRouter.get("/api", apiVideogameHandler);
videogameRouter.get("/id/:id?", idVideogameHandler);
videogameRouter.get("/search/:name?", nameVideogameHandler);
videogameRouter.post("/create", postVideogameHandler);

module.exports = videogameRouter;
