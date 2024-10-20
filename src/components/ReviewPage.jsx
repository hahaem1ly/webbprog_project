import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5001/reviews');
        const sortedReviews = response.data.sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));
        setReviews(sortedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/reviews/${id}`);
      setReviews(reviews.filter((review) => review.id !== id));
      alert('Review deleted successfully!');
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('Failed to delete review.');
    }
  };

  return (
    <Container className="my-4">
      <h1>All Reviews</h1>
      <Row className="g-4 align-items-stretch">
  {reviews.map((review) => (
    <Col key={review.id} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '600px', height: '400px' }} className="d-flex flex-column">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{review.movieTitle}</Card.Title>
          <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '150px' }}>
            {review.reviewText}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="mt-auto">
          <small className="text-muted">Posted on {new Date(review.createdAt).toLocaleString()}</small>
          <Button variant="danger" className="mt-2" onClick={() => handleDelete(review.id)}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>

    </Container>
  );
};

export default ReviewPage;
