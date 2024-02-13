const { getMovies } = require("./getMovies");
const { getMediaWelcomePage } = require("./getMediaWelcomePage");
const { getQuizz } = require("./getQuizz");
const { getTvs } = require("./getTvs");
const { filterMedia } = require("./filterMedia");
const { getQuotes } = require("./getQuotes");
const { getRandomMedia } = require("./getRandomMedia");

module.exports = {
  getMovies,
  getMediaWelcomePage,
  getQuizz,
  getTvs,
  filterMedia,
  getQuotes,
  getRandomMedia,
};
