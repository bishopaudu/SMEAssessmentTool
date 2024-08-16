/*import React, { useState } from 'react';
import axios from 'axios';
import Question from '../Components/Questions';
import './AssessmentFormPage.css'

const AssessmentFormPage = () => {
  const [answers, setAnswers] = useState({});
  const questions = [
    {
      question: 'How would you rate your data governance?',
      options: ['Poor', 'Fair', 'Good', 'Excellent']
    },
    {
      question: 'Do you have AI ethics policies in place?',
      options: ['No', 'Considering', 'In Progress', 'Yes']
    },
    {
      question: 'How would you rate your technical capabilities?',
      options: ['Poor', 'Fair', 'Good', 'Excellent']
    }
  ];

  const handleOptionChange = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/assessments', { answers });
      console.log('Assessment submitted:', response.data);
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  };

  return (
    <div className='main'>
    <form onSubmit={handleSubmit}> 
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          selectedOption={answers[q.question]}
          handleOptionChange={handleOptionChange}
        />
      ))}
      
      <button type="submit">Submit Assessment</button>
    </form>
    </div>
  );
};

export default AssessmentFormPage;*/

import React, { useState } from 'react';
import axios from 'axios';
import Question from '../Components/Questions';
import './AssessmentFormPage.css';

const AssessmentFormPage = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      question: 'How would you rate your data governance?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
    },
    {
      question: 'Do you have AI ethics policies in place?',
      options: ['No', 'Considering', 'In Progress', 'Yes'],
    },
    {
      question: 'How would you rate your technical capabilities?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
    },
  ];

  const handleOptionChange = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/assessments', { answers });
      console.log('Assessment submitted:', response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="main">
        <h2>Thank you for completing the assessment!</h2>
        <p>Your responses have been recorded.</p>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="welcome-text">
        <h2>Welcome to the SMEs AI Readiness Assessment!</h2>
        <p>Answer the following questions to see how prepared your organization is to adopt AI and data-driven solutions.</p>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          selectedOption={answers[questions[currentQuestionIndex].question]}
          handleOptionChange={handleOptionChange}
        />
        <div className="button-group">
          <button
            type="button"
            className="back-button"
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
          >
            Back
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button type="button" className="next-button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Submit Assessment
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AssessmentFormPage;
