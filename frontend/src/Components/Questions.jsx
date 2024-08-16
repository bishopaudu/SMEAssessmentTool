import React from 'react';
import './question.css'

const Question = ({ question, options, selectedOption, handleOptionChange }) => {
  return (
    <div className="question">
      <h3>{question}</h3>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name={question}
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(question, option)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default Question;
