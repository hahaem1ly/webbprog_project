import { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from '../services/movieService';
import 'bootstrap/dist/css/bootstrap.min.css';

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
