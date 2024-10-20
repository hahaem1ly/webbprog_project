import { useState, useEffect } from "react";
import { fetchMovies } from "../services/movieService";
import { MovieCard } from "./MovieCard";

const SearchMovies = ({ onSelectMovie }) => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchDebounce = setTimeout(() => {
      if (query.length > 2) {
        handleSearch();
      }
    }, 300);

    return () => clearTimeout(searchDebounce);
  }, [query]);

  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const response = await fetchMovies(query);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="container my-5">
      <div className="search-bar d-flex justify-content-center">
        <input
          type="text"
          className="form-control search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button
          className="btn btn-primary search-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="results mt-4">
        {isSearching && <p className="text-center text-muted">Searching...</p>}
        {movies.length === 0 && !isSearching && (
          <p className="text-center text-muted">No movies found.</p>
        )}
        <div className="row">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelectMovie={onSelectMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovies;
