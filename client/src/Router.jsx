import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home";
import AddMovie from "./pages/addMovie";
import MovieDetails from "./pages/MovieDetails";

function Router() {
 

  return (
    <>
      <Route
        path="/"
        element={<Home movies={movies} error={error} loading={loading} fetchMovies={fetchMovies} exact/>}
      />
      <Route path="/add-movie" element={<AddMovie />} exact />
      <Route path="/:movieId" element={<MovieDetails />} exact />
    </>
  );
}

export default Router;
