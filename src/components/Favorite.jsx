import React from "react";
import MovieCard from "./MovieCard";

export default function Favorite() {
  const favorites = [
    { id: 1, title: "Начало", posterUrl: "/img/placeholder.jpg", rating: 4.8, tags: ["Sci-Fi"], description: "хихик" },
    { id: 2, title: "Интерстеллар", posterUrl: "/img/placeholder.jpg", rating: 4.7, tags: ["Sci-Fi"], description: "хихик" },
    { id: 3, title: "Паразиты", posterUrl: "/img/placeholder.jpg", rating: 4.6, tags: ["Drama"], description: "хихик" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Избранное</h2>
          <div className="favorite-grid">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </section>
  );
}