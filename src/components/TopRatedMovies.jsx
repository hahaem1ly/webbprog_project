import { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from '../services/movieService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ReviewDialog from './ReviewDialog';

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const [currentMovie, setCurrentMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTopRatedMovies();
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
        setError('Failed to load movies.');
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const fetchReviews = async (movieId) => {
    try {
      const response = await axios.get(`http://localhost:5001/reviews?movieId=${movieId}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleShowModal = (movie) => {
    setCurrentMovie(movie); // Set the current movie for which the review is being written
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentMovie(null);
  };

  
  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="row">
        {movies.map((movie, index) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{index + 1}. {movie.title}</h5>
                {/* Review button */}
                <Button variant="primary" className="mt-3" onClick={() => handleShowModal(movie)}>
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

export default TopRatedMovies;
