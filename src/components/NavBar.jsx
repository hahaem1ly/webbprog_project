// NavBar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="p-3 bg-dark text-white" style={{ height: '100vh' }}>
      <h4>Menu</h4>
      <Nav className="flex-column">
        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
        <Nav.Link href="#movies" className="text-white">Movies</Nav.Link>
        <Nav.Link href="#review" className="text-white">Review</Nav.Link>
      </Nav>
    </div>
  );
};

export default NavBar;
