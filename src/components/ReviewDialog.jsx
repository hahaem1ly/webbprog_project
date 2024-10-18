import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReviewDialog = ({ show, handleClose, movie }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Write a Review for {movie?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="reviewText">
            <Form.Label>Your Review</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your review here..." />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewDialog;
