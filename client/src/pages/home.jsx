import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, Outlet } from "react-router-dom";
import { Button, Card, Container, Alert } from "react-bootstrap";

import Header from "../component/Header"; // Update the import path for the Header component
import SearchBar from "../component/SearchBar"; // Update the import path for the SearchBar component
import Loader from "../component/Loader"; // Update the import path for the Loader component

function Home() {
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
      <Header />
      <Outlet />
      {buildContainer()}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
