import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard";
import "./ProfilePage.css";

export default function ProfilePage() {;
  const user = {
    name: "John Doe",
    profilePic: "/img/avatar.jpg",
    likes: 120,
    reviewsCount: 35,
    favoriteGenres: ["Sci-Fi", "Thriller", "Drama"],
    favorites: [
      { id: "inception", title: "Inception", posterUrl: "/img/placeholder.jpg", rating: 4.8, tags: ["Sci-Fi"] },
      { id: "tenet", title: "Tenet", posterUrl: "/img/placeholder.jpg", rating: 4.5, tags: ["Action"] },
      { id: "matrix", title: "The Matrix", posterUrl: "/img/placeholder.jpg", rating: 4.9, tags: ["Sci-Fi"] },
    ],
    reviews: [
      { movieTitle: "Inception", text: "Amazing plot twist!", rating: 5 },
      { movieTitle: "Tenet", text: "A bit confusing but great visuals.", rating: 4 },
      { movieTitle: "Matrix", text: "Classic!", rating: 5 },
      { movieTitle: "Interstellar", text: "Epic space journey!", rating: 5 },
    ],
  };
  

  return (
    <main className="profile-page">
      <section className="profile-hero container">
        <div className="profile-pic-container">
          <img src={user.profilePic} alt={user.name} className="profile-pic" />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <div className="profile-stats">
            <span>{user.likes} лайка</span>
            <span>{user.reviewsCount} отзыва</span>
          </div>
          <div className="profile-genres">
            {user.favoriteGenres.map((genre) => (
              <span key={genre} className="genre-tag">{genre}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="user-reviews container">
        <h2>Мои отзывы</h2>
        <div className="reviews-grid">
            {user.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} showMovieTitle={true} />
            ))}
        </div>
      </section>

      {/* Favorites */}
      <section className="favorites container">
        <h2>Избранное</h2>
        <div className="favorites-grid">
          {user.favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
