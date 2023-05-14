const express = require("express");
const router = express.Router();

const movieRoutes = require("./movieRouter");

router.use('/movies', movieRoutes);

module.exports = router;
