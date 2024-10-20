import React from 'react';
import NavBar from './components/NavBar';
import TopRatedMovies from './components/TopRatedMovies';
import ReviewPage from './components/ReviewPage'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import UpcomingMovies from './components/UpcomingMovies';
import NowPlaying from './components/NowPlaying';
import SearchMovies from './components/SearchMovies';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <div className="container-fluid">
          <Routes>
            {/* Default Route */}
            <Route path="/" element={<TopRatedMovies />} />
            <Route path="/movies" element={<TopRatedMovies />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/upcoming" element={<UpcomingMovies />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path="/search" element={<SearchMovies />} />
            

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
