import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/MovieCard.module.css";
import ReviewDialog from "./ReviewDialog";

export const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const hasPoster = movie.poster_path !== null;

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" style={{ width: '300px', height: 'auto' }}>
      <div className="card h-100">
        {hasPoster ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="card-img-top"
          />
        ) : (
          <div
            className={`${styles.cardImgPlaceholder} card-img-top d-flex align-items-center justify-content-center`}
            style={{
              backgroundColor: "#e0e0e0",
              height: "300px",
              color: "#777",
              fontSize: "1.2rem",
            }}
          >
            No Image Available
          </div>
        )}
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{movie.title}</h5>
          <h5>Release date: {movie.release_date}</h5>
          <div className={styles.buttonWrap}>
            <Button variant="primary" onClick={handleShowModal}>
              Write a Review
            </Button>
          </div>
        </div>
        <ReviewDialog
          show={showModal}
          handleClose={handleCloseModal}
          movie={movie}
        />
      </div>
    </div>
  );
};
