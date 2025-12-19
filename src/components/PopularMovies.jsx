import React from "react";
import MovieCard from "./MovieCard";

const popularMovies = [
  { id: "blade-runner-2049", title: "Бегущий по лезвию 2049", posterUrl: "/img/bladerunner.jpg", rating: 4.5, tags: ["Sci-Fi"] },
  { id: "the-descent", title: "Спуск", posterUrl: "/img/bladerunner.jpg", rating: 4.3, tags: ["Хоррор"] },
  { id: "inception", title: "Начало", posterUrl: "/img/placeholder.jpg", rating: 4.8, tags: ["Sci-Fi"] },
  { id: "interstellar", title: "Интерстеллар", posterUrl: "/img/placeholder.jpg", rating: 4.7, tags: ["Sci-Fi"] },
  { id: "parasite", title: "Паразиты", posterUrl: "/img/placeholder.jpg", rating: 4.6, tags: ["Драма"] },
];

export default function PopularMovies() {
  return (
    <section className="section">
      <div className="container">
        <h2>Популярные фильмы</h2>
        <div className="popular-movies-grid">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
