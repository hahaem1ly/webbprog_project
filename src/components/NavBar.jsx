import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <div className="p-3 bg-dark text-white" style={{ height: '100vh' }}>
      <h4>Menu</h4>
      <Nav className="flex-column">
       
        <Nav.Link as={Link} to="/movies" className="text-white">
          Movies
        </Nav.Link>
        <Nav.Link as={Link} to="/review" className="text-white">
          Review
        </Nav.Link>
        <Nav.Link as={Link} to="/upcoming" className="text-white">
          Upcoming
        </Nav.Link>

        <Nav.Link as={Link} to="/now_playing" className="text-white">
          Playing
        </Nav.Link>
        
      </Nav>
    </div>
  );
};

export default NavBar;
