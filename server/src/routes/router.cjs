const { Router } = require("express");
const router = Router();

const genresRouter = require("./genresRouter.cjs");
const videogameRouter = require("./videogameRouter.cjs");

router.use("/videogames", videogameRouter);
router.use("/genres", genresRouter);

module.exports = router;
