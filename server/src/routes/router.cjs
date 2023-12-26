const genresRouter = require("./genresRouter.cjs");
const videogameRouter = require("./videogameRouter.cjs");
const { Router } = require("express");
const router = Router();

router.use("/videogames", videogameRouter);
router.use("/genres", genresRouter);

module.exports = router;
