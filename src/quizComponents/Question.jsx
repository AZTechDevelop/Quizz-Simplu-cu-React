import React from 'react';

function Question({ question, options, handleAnswer }) {
  return (
    <div className="question">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
