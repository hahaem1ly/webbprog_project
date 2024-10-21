import { useState, useEffect } from "react";
import { fetchTopRatedMovies } from "../services/movieService";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieCard } from "./MovieCard";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
