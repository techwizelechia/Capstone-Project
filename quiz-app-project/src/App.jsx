import React, { useState, useEffect } from 'react';
import QuizStart from './components/StartQuiz';
import QuestionCard from './components/QuestionCard';
import ScoreSummary from './components/ScoreSummary';
import axios from 'axios';

const App = () => {
  const [quizState, setQuizState] = useState('start'); // start, question, summary
  const [quizConfig, setQuizConfig] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = async (config) => {
    setQuizConfig(config);
    try {
      const { data } = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: config.numberOfQuestions,
          category: 9, // General Knowledge category ID (example only)
          difficulty: config.difficulty,
          type: 'multiple',
        },
      });

      const formattedQuestions = data.results.map((q) => ({
        questionText: q.question,
        answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
        correctAnswer: q.correct_answer,
      }));

      setQuestions(formattedQuestions);
      setQuizState('question');
    } catch (error) {
      console.error('Failed to fetch quiz data:', error);
    }
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('summary');
    }
  };

  const restartQuiz = () => {
    setQuizState('start');
    setQuizConfig(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="container mx-auto p-4">
      {quizState === 'start' && <QuizStart onStart={startQuiz} />}
      {quizState === 'question' && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      {quizState === 'summary' && (
        <ScoreSummary
          score={score}
          totalQuestions={questions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};

export default App;