import React from "react";
import UserRatingsChart from "../components/UserRatingsChart";
import BudgetChart from "../components/BudgetChart";
import RatingGraphsChart from "../components/RatingGraphsChart";
import ReviewsAnalysisChart from "../components/ReviewsAnalysisChart";
import MovieCard from "../components/MovieCard";
import ReviewCard from "../components/ReviewCard"; 
import "./FilmPage.css";

export default function FilmPage() {
  const movie = {
    title: "Inception",
    posterUrl: "/img/placeholder.jpg",
    genres: ["Sci-Fi", "Триллер"],
    releaseYear: 2010,
    ageRating: "12+",
    length: "2ч 28мин",
    screenshots: ["/img/screenshot1.jpg", "/img/screenshot2.jpg", "/img/screenshot3.jpg"],
    director: "Кристофер Нолан",
    actors: ["Леонардо ДиКаприо", "Джозеф Гордон Левитт", "Эллиот Пейдж"],
    reviewsCount: "12 тыс",
    synopsis: "Кобб — талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил.",
    // Budget and box office
    budget: 160,      // in millions
    boxOffice: 830,   // in millions
    // User ratings
    userRatings: [
      { rating: 1, count: 200 },
      { rating: 2, count: 400 },
      { rating: 3, count: 1200 },
      { rating: 4, count: 3500 },
      { rating: 5, count: 4800 },
    ],

    userRatingsIndexes: {
      worldPlace: "#12",
      ratingsPerDay: 350,
      firstRating: "2010-07-16",
      lastRating: "2025-12-01",
    },
    // Rating graphs (mock)
    ratingOverTime: [
      { date: "2025-01-01", our: 4.5, tmdb: 4.3 },
      { date: "2025-02-01", our: 4.6, tmdb: 4.4 },
      { date: "2025-03-01", our: 4.5, tmdb: 4.5 },
    ],
    ratingDistribution: [
      { rating: 1, our: 200, tmdb: 180 },
      { rating: 2, our: 400, tmdb: 350 },
      { rating: 3, our: 1200, tmdb: 1100 },
      { rating: 4, our: 3500, tmdb: 3300 },
      { rating: 5, our: 4800, tmdb: 4700 },
    ],
    // Reviews
    reviewsTone: {
      positive: 65,
      neutral: 25,
      negative: 10
    },
    reviewsToxicity: {
      normal: 85,
      toxic: 15
    },

    reviews: [
      {
        author: "Алексей",
        date: "12.03.2025 · 18:42",
        rating: 5,
        text:
          "Фильм поражает своей глубиной. Каждый просмотр открывает что-то новое. Музыка, сюжет и визуал — всё на высоте."
      },
      {
        author: "Мария",
        date: "08.03.2025 · 21:10",
        rating: 4,
        text:
          "Очень сильная идея и отличная реализация. Немного перегружен в середине, но финал полностью оправдывает ожидания."
      }
    ],


    recommendations: [
      {
        id: "interstellar",
        title: "Interstellar",
        posterUrl: "/img/placeholder.jpg",
        rating: 4.7,
        tags: ["Sci-Fi"],
        description: "Космическая одиссея о времени и любви"
      },
      {
        id: "tenet",
        title: "Tenet",
        posterUrl: "/img/placeholder.jpg",
        rating: 4.2,
        tags: ["Sci-Fi"],
        description: "Время — главное оружие"
      }
    ],
    userRatingsTotal: 10000,
    reviewsTotal: 10000,  // total number of ratings

    budgetRatio: (830/160).toFixed(1), // 5.2x
    cultScore: 8.5, // scale 0-10
    paybackScore: 5,
    avgRatingOur: 4.6,
    avgRatingTMDB: 4.5 // scale 0-10
  };

  

  return (
    <main className="film-page">
      {/* Top Section */}
      <section className="film-top-section container">
        {/* Left Column */}
        <div className="film-poster-column">
          <img src={movie.posterUrl} alt={movie.title} className="film-poster" />
          <div className="film-genres">
            {movie.genres.map((genre) => (
              <span key={genre} className="genre-tag">{genre}</span>
            ))}
          </div>
          <div className="film-meta">
            <span>{movie.releaseYear}</span>
            <span className="dot">•</span>
            <span>{movie.ageRating}</span>
            <span className="dot">•</span>
            <span>{movie.length}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="film-right-column">
          {/* Screenshots */}
          <div className="film-screenshots">
            {movie.screenshots.map((shot, i) => (
              <img key={i} src={shot} alt={`Screenshot ${i + 1}`} className="screenshot" />
            ))}
          </div>

          {/* Movie info + buttons */}
          <div className="film-info-row">
            <div>
              <h1 className="film-title">{movie.title}</h1>
              <span className="director">Режиссер: {movie.director}</span>
              <span className="actors">Актеры: {movie.actors.join(", ")}</span>
              <span className="reviews-count">{movie.reviewsCount}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <button className="btn favorite">В избранное</button>
              <button className="btn rate">Оценить фильм</button>
              <button className="btn review">Оставить отзыв</button>
            </div>
          </div>

          {/* Synopsis */}
          <div className="film-synopsis">
            <h2>Synopsis</h2>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="film-analysis container">
      <h2>Аналитика</h2>

      <div className="analysis-grid">

        {/* LEFT COLUMN (≈42%) */}
        <div className="analysis-left">
          <div className="analysis-card">
            <div className="analysis-card-header">
                <div className="analysis-card-header-left">
                  <h3>Пользовательские оценки</h3>
                  <span className="analysis-card-subtitle">
                    на основе {movie.reviewsCount} оценок
                  </span>
                </div>
            </div>
            <UserRatingsChart
              data={movie.userRatings}
              indexes={movie.userRatingsIndexes}
            />
          </div>

          <div className="analysis-card">
              <div className="analysis-card-header">
                  <div className="analysis-card-header-left">
                    <h3>Отзывы</h3>
                    <span className="analysis-card-subtitle">
                      на основе {movie.userRatingsTotal} отзывов
                    </span>
                  </div>
              </div>
            <ReviewsAnalysisChart
              tone={movie.reviewsTone}
              toxicity={movie.reviewsToxicity}
            />
          </div>
        </div>

        {/* RIGHT COLUMN (≈56%) */}
        <div className="analysis-right">
          <div className="analysis-card">
            <div className="analysis-card-header">
              <div className="analysis-card-header-left">
                <h3>Бюджет / Сборы:</h3>
                  <span className="analysis-card-subtitle">
                    Фильм окупился {movie.budgetRatio} раз
                  </span>
              </div>
                <div className="analysis-card-tags">
                  <span className="tag cult">Культовость {movie.cultScore}</span>
                  <span className="tag payback">Окупаемость {movie.paybackScore}</span>
                </div>
              </div>
            <BudgetChart
              name={movie.title}
              budget={movie.budget}
              boxOffice={movie.boxOffice}
            />
          </div>

          <div className="analysis-card">
              <div className="analysis-card-header">
                <div className="analysis-card-header-left">
                <h3>Рейтинг</h3>
                  <span className="analysis-card-subtitle">
                    на основе {movie.reviewsCount} оценок
                  </span>
                </div>
                <div className="analysis-card-tags">
                  <span className="tag our">Movie Scope {movie.avgRatingOur}</span>
                  <span className="tag tmdb">TMDB {movie.avgRatingTMDB}</span>
                </div>
              </div>
            <RatingGraphsChart
              overTime={movie.ratingOverTime}
              distribution={movie.ratingDistribution}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Popular Reviews */}
    <section className="film-reviews container">
        <h2>Популярные отзывы</h2>
        <p className="section-subtitle">
          Самые популярные отзывы к этому фильму
        </p>
        <div className="reviews-grid">
          {Array.isArray(movie.reviews) && movie.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} showButtons={true} />
          ))}
        </div>
      </section>
    {/* Recommendations */}
    <section className="film-recommendations container">
      <h2>Рекомендации</h2>

      <div className="recommendations-grid">
        {movie.recommendations.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
    </main>
  );
}
