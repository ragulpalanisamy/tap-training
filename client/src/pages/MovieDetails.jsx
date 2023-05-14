import React from 'react'
import { useParams } from 'react-router-dom';

function MovieDetails() {

    const { movieId } = useParams();
  return (
    <div>
      <h1>Movie Detials { movieId }</h1>
    </div>
  )
}

export default MovieDetails;