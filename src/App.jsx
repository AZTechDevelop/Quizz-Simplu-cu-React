
import React, { useState } from 'react';

import Quiz from './quizComponents/Quiz';
import Score from './quizComponents/Score';
import questions from './quizComponents/Question';

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if(currentQuestion < 9)
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setCurrentQuestion(currentQuestion + 1);
    }
      else{
        setCurrentQuestion(currentQuestion)
        setScore(score-1)
      }
    else{
      setShowScore(true)
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
        <Score score={score} totalQuestions={questions.length} onRestart={restartQuiz} />
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerClick}
          questionNumber={currentQuestion + 1}
        />
      )}
    </div>
  );
}

export default App;
