import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({
  percentage = 0,
  showPercentage = false,
  height = "10px",
}) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ height }}>
        <div
          className="progress-fill"
          style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
        ></div>
      </div>
      {showPercentage && (
        <span className="progress-percentage">{percentage}%</span>
      )}
    </div>
  );
};

export default ProgressBar;
