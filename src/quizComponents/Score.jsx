
import React from 'react';

const Score = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="score-section">
      <h2>Scorul tău este {score} din {totalQuestions}</h2>
      <button onClick={onRestart}>Reia quiz-ul</button>
    </div>
  );
};

export default Score;
