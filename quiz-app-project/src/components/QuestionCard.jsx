import React from 'react';

const QuestionCard = ({ question, onAnswer, currentQuestionIndex, totalQuestions }) => {
  const { questionText, answers } = question;

  return (
    <div className="p-4 space-y-4 border rounded-md">
      <h2 className="font-bold">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h2>
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: questionText }}></p>
      <div className="flex flex-col space-y-2">
        {answers.map((answer, idx) => (
          <button
            key={idx}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            onClick={() => onAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;