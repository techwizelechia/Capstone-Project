import React, { useState } from 'react';

const QuizStart = ({ onStart }) => {
  const [topic, setTopic] = useState('General Knowledge');
  const [difficulty, setDifficulty] = useState('easy');
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h1 className="text-2xl font-bold">Start Your Quiz</h1>
      <div>
        <label>Topic:</label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} className="ml-2 border px-2">
          <option>General Knowledge</option>
          <option>Science</option>
          <option>History</option>
          <option>Entertainment</option>
        </select>
      </div>
      <div>
        <label>Difficulty:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="ml-2 border px-2">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label>Number of Questions:</label>
        <input
          type="number"
          value={numberOfQuestions}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
          min="1"
          max="50"
          className="ml-2 border px-2"
        />
      </div>
      <button
        onClick={() => onStart({ topic, difficulty, numberOfQuestions })}
        className="bg-blue-500 text-white px-2 py-2 rounded"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizStart;
