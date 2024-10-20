import React from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/MovieCard.module.css";

export const MovieCard = ({ movie, handleShowModal }) => {
  const hasPoster = movie.poster_path !== null;

  return (
    <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className={"card h-100"}>
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
          <div className={styles.buttonWrap}>
            <Button variant="primary" onClick={() => handleShowModal(movie)}>
              Write a Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
