import React from "react";
import "./ReviewCard.css";

export default function ReviewCard({ review, showMovieTitle = false, showButtons = false }) {
  return (
    <div className="review-card">
      {/* Top row: author + date & rating */}
      <div className="review-header">
        <span className="review-author">{review.author}</span>
        <span className="review-meta">
          {review.date} · Rating: {review.rating}
        </span>
      </div>

      {/* Review text */}
      <div className="review-text">{review.text}</div>

      {/* Optional film title */}
      {showMovieTitle && <div className="review-movie">{review.movieTitle}</div>}

      {/* Buttons */}
      {showButtons && (
        <div className="review-buttons">
          <button className="btn useful">Useful</button>
          <button className="btn not-useful">Not useful</button>
        </div>
      )}
    </div>
  );
}
