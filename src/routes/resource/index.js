const express = require("express");

const {
  getMovies,
  getTvs,
  getQuizz,
  getMediaWelcomePage,
  filterMedia,
  getQuotes,
  getRandomMedia,
} = require("./controller");

const router = express.Router();

router.get("/", getMediaWelcomePage);
router.get("/movies", getMovies);
router.get("/tvs", getTvs);
router.get("/quizz", getQuizz);
router.get("/filter", filterMedia);
router.get("/quotes", getQuotes);
router.get("/random-media", getRandomMedia);

module.exports = router;
