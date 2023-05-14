import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from "./component/Header";
import Home from "./pages/home";
import AddMovie from "./pages/addMovie";

import "./custom.scss";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home movies={movies} error={error} loading={loading} fetchMovies={fetchMovies} />} />
        <Route path="/add-movie" element={<AddMovie />} />
    </Routes>
    </BrowserRouter>
);

}
export default App;
