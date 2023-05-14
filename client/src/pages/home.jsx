import { Button, Card, Container, Alert } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import SearchBar from "../component/searchBar";
import Loader from "../component/loader";

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


export default Home;