import React from "react";
import { Button } from "react-bootstrap";

export const MovieCard = ({ movie, handleShowModal }) => {
  return (
    <div
      key={movie.id}
      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
      style={{ width: "300px", height: "auto" }}
    >
      <div className="card h-100">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => handleShowModal(movie)}
          >
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  );
};
