const videogameRouter = require("./videogameRouter.cjs");
const { Router } = require("express");
const router = Router();

router.use("/videogames", videogameRouter);

module.exports = router;
