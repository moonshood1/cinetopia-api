const express = require("express");

const {
  getMovies,
  getTvs,
  getQuizz,
  getMediaWelcomePage,
  filterMedia,
} = require("./controller");

const router = express.Router();

router.get("/", getMediaWelcomePage);
router.get("/movies", getMovies);
router.get("/tvs", getTvs);
router.get("/quizz", getQuizz);
router.get("/filter", filterMedia);

module.exports = router;
