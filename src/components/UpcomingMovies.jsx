import React, { useState, useEffect } from 'react';
import { fetchUpcomingMovies } from '../services/movieService'; // Import the API service
import 'bootstrap/dist/css/bootstrap.min.css';

const UpcomingMovies = () =>{
    const[upcomingMovies, setUpcomingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchUpcomingMovies();
                setUpcomingMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching upcoming movies:', error);
                setError('Failed to load movies.');
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
              <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{ width: '300px', height: 'auto' }}>
                <div className="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
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
      );
    };
    


export default UpcomingMovies;