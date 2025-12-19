import React from "react";

const popularSeries = [
  { id: "stranger-things", title: "Очень Странные Дела", posterUrl: "/img/placeholder.jpg", release: "2022", director: "Братья Даффер", reviews: "12 тыс", genres: ["Sci-Fi", "Зоррор"] },
    { id: "witcher", title: "Ведьмак", posterUrl: "/img/placeholder.jpg", release: "2019", director: "Лорен Шмидт", reviews: "8 тыс", genres: ["Фэнтези"] },
    { id: "breaking-bad", title: "Во Все Тяжкие", posterUrl: "/img/placeholder.jpg", release: "2008", director: "Винс Гиллиган", reviews: "15 тыс", genres: ["Драма", "Криминал"] },
    { id: "the-mandalorian", title: "Мандалорец", posterUrl: "/img/placeholder.jpg", release: "2019", director: "Джон Фавро", reviews: "10 тыс", genres: ["Sci-Fi", "Экшн"] },
  ];

export default function PopularSeries() {
  return (
    <section className="section">
      <div className="container">
        <h2>Популярные сериалы</h2>
        <div className="series-grid">
          {popularSeries.map((series) => (
            <div key={series.id} className="series-card">
              <img src={series.posterUrl} alt={series.title} />
              <div className="series-info">
                <strong>{series.title}</strong>
                <span className="release-director">{series.release} - {series.director}</span>
                <div className="series-bottom">
                  <span className="reviews">{series.reviews} обзоров</span>
                  <div className="genres">
                    {series.genres.map((genre) => (
                      <span key={genre} className="genre-tag">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}