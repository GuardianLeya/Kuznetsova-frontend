import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function UserRatingsChart({ data, indexes }) {
  // data example: [{ rating: 1, count: 120 }, { rating: 2, count: 75 }, ...]
  return (
    <div>
      <div className="analysis-panel">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#1F6BFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
        <div className="rating-indexes">
          <div className="rating-index analysis-panel compact ">
            <span className="label">Место (мир)</span>
            <strong>{indexes.worldPlace}</strong>
          </div>

          <div className="rating-index  analysis-panel compact ">
            <span className="label">Оценок в день</span>
            <strong>{indexes.ratingsPerDay}</strong>
          </div>

          <div className="rating-index  analysis-panel compact ">
            <span className="label">Первая оценка</span>
            <strong>{indexes.firstRating}</strong>
          </div>

          <div className="rating-index  analysis-panel compact ">
            <span className="label">Последняя оценка</span>
            <strong>{indexes.lastRating}</strong>
          </div>
        </div>
    </div>
  );
}
