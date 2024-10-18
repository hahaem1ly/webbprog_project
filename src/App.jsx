import React from 'react';
import NavBar from './components/NavBar';
import TopRatedMovies from './components/TopRatedMovies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
       {/* Sidebar (NavBar) */}
       <div className="col-12 col-md-3 bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
          <NavBar />
        </div>

        {/* Main content (Top Rated Movies) */}
        <div className="col-12 col-md-9">
          <TopRatedMovies />
        </div>
      </div>
    </div>
  );
}

export default App;
