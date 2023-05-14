const { movies } = require("../constant/movies");

const getAllMovies = (req, res) => {
  res.json(movies);
};

const getMovie = (req, res) => {
  const { movieId } = req.params;

  try {
    const movie = movies.filter(movie => movie.id === Number(movieId));
    if (movie.length === 0) throw new Error("Movie Not Found");
    res.json({
      message: 'Movie Found',
      movie: movie && movie[0]
    });
  } catch (e) {
    res.status(404).json({
      message: e.message
    });
  }
};

module.exports = {
  getAllMovies,
  getMovie
};
