import React, { useState, useEffect } from 'react';
import { fetchUpcomingMovies } from '../services/movieService'; // Import the API service
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewDialog from './ReviewDialog';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchUpcomingMovies(); // Fetch the upcoming movies
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        setError('Failed to load upcoming movies.');
        setLoading(false);
      }
    };
    
    getMovies(); // Trigger the movie fetch
  }, []);

  const handleShowModal = (movie) => {
    setCurrentMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentMovie(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p>Release Date: {movie.release_date}</p>
                <Button variant="primary" onClick={() => handleShowModal(movie)}>
                  Write a Review
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentMovie && (
        <ReviewDialog
          show={showModal}
          handleClose={handleCloseModal}
          movie={currentMovie}
        />
      )}
    </div>
  );
};

export default UpcomingMovies;
