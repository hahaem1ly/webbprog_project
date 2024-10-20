import { useState, useEffect } from "react";
import { fetchTopRatedMovies } from "../services/movieService";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewDialog from "./ReviewDialog";
import { MovieCard } from "./MovieCard";

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
        console.error("Error fetching top-rated movies:", error);
        setError("Failed to load movies.");
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
      const response = await axios.get(
        `http://localhost:5001/reviews?movieId=${movieId}`
      );
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
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
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleShowModal={handleShowModal}
          />
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
