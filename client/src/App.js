import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Alert } from "react-bootstrap";
//import {Router} from "router";

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

  const fetchMovies = async() => {
    try {
      setLoading(true);
      const response = await axios("http://localhost:4000/movies");
      setLoading(false);
      setMovies(response.data);
      setError(null);
    } catch (e) {
      setError(`Server Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
