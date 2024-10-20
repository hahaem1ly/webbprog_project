import React from 'react';
import NavBar from './components/NavBar';
import TopRatedMovies from './components/TopRatedMovies';
import ReviewPage from './components/ReviewPage'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

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
           
            

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
