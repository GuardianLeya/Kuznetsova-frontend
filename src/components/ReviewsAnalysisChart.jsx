import React from "react";

export default function ReviewsAnalysisChart({ tone, toxicity }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
      <div className="analysis-panel compact">
        <h4>Тональность</h4>
        <div style={{ color: "#ffffffff", background: "#4CAF50", borderRadius: "12px", padding: "4px", marginBottom: "8px"}}>Положительные: {tone.positive}%</div>
        <div style={{ color: "#ffffffff", background: "#FFC107", borderRadius: "12px", padding: "4px", marginBottom: "8px" }}>Нейтральные: {tone.neutral}%</div>
        <div style={{ color: "#ffffffff", background: "#F44336", borderRadius: "12px", padding: "4px" }}>Отрицательные: {tone.negative}%</div>
      </div>
          <div className="analysis-panel compact">
        <h4>Токсичность</h4>
        <div style={{ color: "#ffffffff", background: "#4CAF50", borderRadius: "12px", padding: "4px", marginBottom: "8px" }}>Нормальные: {toxicity.normal}%</div>
        <div style={{ color: "#ffffffff", background: "#F44336", borderRadius: "12px", padding: "4px" }}>Токсичные: {toxicity.toxic}%</div>
      </div>
    </div>
  )
}
