import React, { useState, useEffect } from 'react';
import { fetchUpcomingMovies } from '../services/movieService'; // Import the API service
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpcomingMovies = () =>{
    const[movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetchUpcomingMovies();
                setMovies(response.data.results);
                setLoading = false;
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
}




export default UpcomingMovies;