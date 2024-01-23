import React, { useState } from 'react';
import Question from './Question.jsx';

const quizData = [
  {
    question: 'Care este capitala Elvetiei?',
    options: ['Berlin', 'Paris', 'Viena', 'Madrid'],
    correctAnswer: 'Berlin',
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz complet, scorul tau este ${score}`);
    }
  };

  return (
    <div className="quiz">
      <Question
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;
