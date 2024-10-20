// ReviewDialog.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ReviewDialog = ({ show, handleClose, movie }) => {
  const [reviewText, setReviewText] = useState('');

  // Function to handle review submission
  const handleSubmit = async () => {
    try {
      const review = {
        movieId: movie.id,       
        movieTitle: movie.title, 
        reviewText: reviewText,  
        createdAt: new Date().toISOString() 
      };

      await axios.post('http://localhost:5001/reviews', review);

      alert('Review submitted successfully!');
      handleClose(); 
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Write a Review for {movie?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="reviewText">
            <Form.Label>Your Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewDialog;
