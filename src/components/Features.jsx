import React from "react";

export default function Features() {
  const items = [
    { title: "AI-Анализ", text: "Глубокий анализ тональности отзывов с помощью нейросетей и обработки естественного языка" },
    { title: "Визуализация данных", text: "Интерактивные графики и диаграммы для анализа рейтингов, эмоций и трендов" },
    { title: "Умные рекомендации", text: "Персонализированные рекомендации на основе ваших предпочтений и истории просмотров" },
  ];

  return (
    <section className="features">
      <div className="container features-container">
        {items.map((item, i) => (
          <div key={i} className="feature">
            <div className="feature-title">
              <span className="badge">{i + 1}</span>
              <h3>{item.title}</h3>
            </div>
            <p className="feature-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
