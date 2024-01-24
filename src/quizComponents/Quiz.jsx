
import React from 'react';

const Quiz = ({ question, onAnswerClick, questionNumber }) => {
  return (
    <div className="question-section">
      <h2>Întrebare {questionNumber}:</h2>
      <p>{question.question}</p>
      <div className="answer-section">
        {question.options.map((option) => (
          <button key={option} onClick={() => onAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
