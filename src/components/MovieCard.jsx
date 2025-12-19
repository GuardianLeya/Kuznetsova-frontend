import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/film/${movie.id}`} className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} className="poster" />
      <span className="rating">{movie.rating.toFixed(1)}</span>
      <span className="genre">{movie.tags[0]}</span>
      <div className="movie-bottom-info">
        <strong className="movie-title">{movie.title}</strong>
        <div>
        <span className="movie-desc">{movie.description || "Лучший фильм"}</span>
        </div>
      </div>
    </Link>
  );
}
