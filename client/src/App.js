import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Alert } from "react-bootstrap";

import Header from "./component/Header";
import SearchBar from "./component/searchBar";

import "./custom.scss";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchMovies()
  },[]);

  const fetchMovies = async() => {
  try{
    const response = await axios('http://localhost:4000/movies');
    setMovies(response.data);
  }
  catch(e){
    setError(`Server Error:${e.message}`);//errror stack also do to see the full error.
  }
}
  return (
    <>
      <Header />
      <Container className="mt-5">
        {error && <Alert variant="danger">{error}</Alert>}
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
