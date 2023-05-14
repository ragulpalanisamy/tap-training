import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Home from "./pages/home";
import AddMovie from "./pages/addMovie";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
