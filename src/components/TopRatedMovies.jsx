import { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from '../services/movieService';
import './TopRatedMovies.css';  // Import the CSS file

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTopRatedMovies();
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <div className="grid-container">
        {movies.map((movie, index) => (
          <div key={movie.id} className="grid-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{index + 1}. {movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
