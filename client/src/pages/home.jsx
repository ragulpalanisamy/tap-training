import { useState, useEffect } from "react";
import { Alert,Button, Card } from "react-bootstrap";
import axios from "axios";
//import { useNavigation } from "react-router-dom";

import SearchBar from "../component/searchBar";
import Loader from "../component/loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    //const navigator = useNavigation();

    const fetchMovies = async () => {
        try {
            setLoading(true);
            const response = await axios(`http://localhost:4000/api/movies?searchText=${searchText}`);
            setLoading(false);
            setMovies(response.data);
            setError(null);
        } catch (e) {
            setLoading(false);
            setError(`Server Error: ${e.message} ${e.stack}`);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const onClickViewMovie= () => {
        return (
          <h1>Movies</h1>
        )
    }

    return (
        <>
            <SearchBar onClickRefresh={fetchMovies} setSearchText={setSearchText} />
            {error && <Alert variant="danger">{error}</Alert>}
            {loading ? (
                <Loader />
            ) : (
                <div className="d-flex flex-wrap justify-content-start">
                    {movies.map((movie) => {
                        const { title, id } = movie;

                        return (
                            <Card key={id} className="m-3 movie-card">
                                <Card.Body className="text-center">
                                    <Card.Title className="bg-#dcdcdc">{title}</Card.Title>
                                    <Card.Text className="mw-1">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </Card.Text>
                                    <Button
                                        variant="success"
                                        onClick={() => onClickViewMovie(movie)}
                                        >
                                        View Movie
                                    </Button> 
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Home;
