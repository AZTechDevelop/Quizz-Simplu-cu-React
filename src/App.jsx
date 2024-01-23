import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Care este capitala Franței?',
    options: ['Berlin', 'Londra', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Care este capitala Japoniei?',
    options: ['Seul', 'Tokyo', 'Beijing', 'Hanoi'],
    correctAnswer: 'Tokyo',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          <h2>Scorul tău este {score} din {questions.length}</h2>
          <button onClick={restartQuiz}>Reia quiz-ul</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Întrebare {currentQuestion + 1}:</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
