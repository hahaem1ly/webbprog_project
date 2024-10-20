import React, { useState, useEffect } from "react";
import { fetchNowPlaying } from "../services/movieService"; // Import the API service
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieCard } from "./MovieCard";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchNowPlaying();
        setNowPlaying(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
        setError("Failed to load movies.");
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Now Playing</h1>
      <div className="row">
        {nowPlaying.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
