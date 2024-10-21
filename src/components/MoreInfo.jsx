import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MoreInfo = ({ show, handleClose, movie }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{movie?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: 'center' }}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ maxWidth: '100%', marginBottom: '1rem' }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '400px',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#777',
              }}
            >
              No Image Available
            </div>
          )}

          <p><strong>Overview:</strong></p>
          <p>{movie.overview || 'No overview available for this movie.'}</p>

          <p><strong>Release Date:</strong> {movie.release_date || 'Unknown'}</p>
          <p><strong>Rating:</strong> {movie.vote_average || 'N/A'}/10</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreInfo;
