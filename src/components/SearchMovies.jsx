import { useState } from 'react';
import { fetchMovies } from '../services/movieService'; // Fetching service

// Functional Component Definition
const SearchMovies = ({ onSelectMovie }) => {
  const [query, setQuery] = useState('');    // React state for search query
  const [movies, setMovies] = useState([]);  // React state for storing fetched movies

  // Event handler for searching movies
  const handleSearch = async () => {
    try {
      const response = await fetchMovies(query);
      setMovies(response.data.results);  // Set movies from the API response
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      
      {/* Search button */}
      <button onClick={handleSearch}>Search</button>
      
      {/* Movie list */}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onSelectMovie(movie)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the component so it can be imported and used elsewhere
export default SearchMovies;
