import React from 'react';

const ScoreSummary = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Quiz Completed!</h1>
      <p className="text-lg">
        Your Score: {score}/{totalQuestions}
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreSummary;