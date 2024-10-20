import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews from the database
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

  // Function to delete a review
  const handleDelete = async (id) => {
    try {
      // Delete the review from the json-server (database)
      await axios.delete(`http://localhost:5001/reviews/${id}`);

      // Update the state by removing the deleted review from the UI
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
      <Row>
        {reviews.map((review) => (
          <Col key={review.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{review.movieTitle}</Card.Title>
                <Card.Text>{review.reviewText}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">Posted on {new Date(review.createdAt).toLocaleString()}</small>
                </Card.Footer>
                {/* Delete button */}
                <Button variant="danger" onClick={() => handleDelete(review.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewPage;
