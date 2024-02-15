import React from 'react';
import {useState} from 'react'

const Quiz = ({ question, onAnswerClick, questionNumber }) => {
 

  return (
    <div className="question-section">
      <h4>Raspunsul gresit va scadea 1 la scorul final</h4>
      <h2>Întrebare {questionNumber}:</h2>
      <p>{question.question}</p>
      <div className="answer-section">
        {question.options.map((option) => (
          <button key={option} onClick={() => { onAnswerClick(option); esteFalsa(); }}>
          {option}
        </button>        
        ))}
      </div>
    </div>
  );
};

export default Quiz;
