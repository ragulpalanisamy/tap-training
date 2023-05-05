import { Button, Card, Container } from "react-bootstrap";
import Header from "./component/Header";
import SearchBar from "./component/searchBar";

import "./custom.scss";
import { movies } from "./constant/movies";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <SearchBar />
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
      </Container>
    </>
  );
}

export default App;
