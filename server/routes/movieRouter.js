const express = require("express");
const router = express.Router();

const { getAllMovies, getMovie } = require("../controllers/movieController");

router.get("/", getAllMovies);
router.get("/:movieId", getMovie);

module.exports = router;
