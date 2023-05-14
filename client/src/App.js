import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Home from "./pages/home";
import AddMovie from "./pages/addMovie";
import MovieDetails from "./pages/MovieDetails";

import "./custom.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/movies");
      setLoading(false);
      setMovies(response.data);
      setError(null);
    } catch (e) {
      setError(`Server Error: ${e.message}`);
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home movies={movies} error={error} loading={loading} fetchMovies={fetchMovies} />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
