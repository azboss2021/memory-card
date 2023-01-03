import React from "react";

const Score = ({ score, bestScore }) => {
  return (
    <div id="score">
      Score: {score} - Best Score: {bestScore}
    </div>
  );
};

export default Score;
