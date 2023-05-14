import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Button, Card, Container, Alert } from "react-bootstrap";

import Header from "./component/Header";
import SearchBar from "./component/searchBar";
import Loader from "./component/loader";

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
      </Routes>
    </BrowserRouter>
  );
}

function Home({ movies, error, loading, fetchMovies }) {
  const buildContainer = () => {
    return (
      <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}
        <SearchBar OnClickRefresh={fetchMovies} />
        {loading ? (
          <Loader />
          ) : (
            <div className="d-flex flex-wrap">
            {movies.map(({ title, id }) => (
              <Card key={id} className="m-3">
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text> billionaire engineer Tony Stark </Card.Text>
                  <Button variant="success">Book Movies</Button>
                </Card.Body>
              </Card>
            ))}
            </div>
            )}
      </Container>
    );
  };

  return (
    <div>
      <Outlet />
      {buildContainer()}
    </div>
  );
}

function AddMovie() {
  const buildAddMovieForm = () => {
    return <h1>Add movie to the list</h1>;
  };

  return (
    <div>
      <Outlet />
      {buildAddMovieForm()}
    </div>
  );
}

export default App;
