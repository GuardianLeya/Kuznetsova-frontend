import React from "react";

export default function ReviewCard({ review, showMovieTitle = false, showButtons = false }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="review-author">{review.author}</span>
        <span className="review-meta">
          {review.date} · Rating: {review.rating}
        </span>
      </div>

      <div className="review-text">{review.text}</div>

      {showMovieTitle && <div className="review-movie">{review.movieTitle}</div>}

      {showButtons && (
        <div className="review-buttons">
          <button className="btn useful">Useful</button>
          <button className="btn not-useful">Not useful</button>
        </div>
      )}
    </div>
  );
}
