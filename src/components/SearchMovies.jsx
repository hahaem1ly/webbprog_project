import { useState } from 'react';
import { fetchMovies } from '../services/movieService';

const SearchMovies = ({ onSelectMovie }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetchMovies(query);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      
      <button onClick={handleSearch}>Search</button>
      
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

export default SearchMovies;
