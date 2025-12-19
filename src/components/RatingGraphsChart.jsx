import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Mock data for demonstration

const ratingsOverTime = [
  { day: "2025-12-01", our: 120, tmdb: 150 },
  { day: "2025-12-02", our: 130, tmdb: 160 },
  { day: "2025-12-03", our: 110, tmdb: 140 },
  { day: "2025-12-04", our: 140, tmdb: 155 },
  { day: "2025-12-05", our: 150, tmdb: 170 },
];

const ratingDistribution = [
  { rating: 1, our: 20, tmdb: 15 },
  { rating: 2, our: 30, tmdb: 25 },
  { rating: 3, our: 50, tmdb: 60 },
  { rating: 4, our: 80, tmdb: 90 },
  { rating: 5, our: 120, tmdb: 130 },
];

export default function RatingGraphsChart() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div className="analysis-card">
        <div className="analysis-panel">
        <h3>Рейтинг в сервисах по дням:</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ratingsOverTime} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="our" name="MovieScope" stroke="#1F6BFF" strokeWidth={2} />
                <Line type="monotone" dataKey="tmdb" name="TMDB" stroke="#4CAF50" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="analysis-card">
        <div className="analysis-panel">
          <h3>Рейтинг к количеству оценок</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ratingDistribution} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="our" name="MovieScope" stroke="#1F6BFF" strokeWidth={2} />
                <Line type="monotone" dataKey="tmdb" name="TMDB" stroke="#4CAF50" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
