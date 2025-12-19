import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function BudgetChart(props) {
  const { budget, boxOffice, name } = props;

  const data = [
    { name: name || "Film", budget: budget || 0, boxOffice: boxOffice || 0 }
  ];

  return (
    <div className="analysis-panel">
      <ResponsiveContainer width="100%" height={120}>
        <BarChart layout="vertical" data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar  barSize={100} dataKey="budget" fill="#FF4C4C" name="Бюджет" />
          <Bar barSize={100} dataKey="boxOffice" fill="#1F6BFF" name="Сборы" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
