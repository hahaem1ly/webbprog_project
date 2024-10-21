import React, { useState, useEffect } from "react";
import { fetchUpcomingMovies } from "../services/movieService";
import { MovieCard } from "./MovieCard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchUpcomingMovies();
        setUpcomingMovies(response.data.results);
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
      <h1>Upcoming Movies!!</h1>
      <div className="row">
        {upcomingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
