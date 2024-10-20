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
      <div>
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ width: '300px', height: 'auto' }}>
                <div className="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top img-fluid"
                  />
                   <div className="card-body">
                    <h3 className="card-title">{movie.title}</h3>
                    <h5>Release date: {movie.release_date}</h5>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

// Exporting the component so it can be imported and used elsewhere
export default SearchMovies;
