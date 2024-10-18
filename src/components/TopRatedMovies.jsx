import { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from '../services/movieService';  // Import the movie fetching function

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);  // State to store movies
  const [loading, setLoading] = useState(true);  // State to manage loading status

  // useEffect to fetch the top-rated movies once the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTopRatedMovies();  // Fetch movies from the service
        setMovies(response.data.results);  // Set the movies data
        setLoading(false);  // Turn off loading
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);  // Handle errors
        setLoading(false);  // Turn off loading even if there's an error
      }
    };

    fetchMovies();
  }, []);  // Empty dependency array ensures this runs once after the component mounts

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the top-rated movies in a numbered list
  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.id}>
            {index + 1}. {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedMovies;
