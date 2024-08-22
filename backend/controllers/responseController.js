// controllers/responseController.js
/*const Response = require('../models/responseModel');

// @desc    Get all responses
// @route   GET /api/responses
// @access  Admin
exports.getResponses = async (req, res) => {
  try {
    const responses = await Response.find().populate('answers.questionId');
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
*/
// controllers/responseController.js
const Response = require('../models/responseModel');
const mongoose = require('mongoose');

// @desc    Get all responses
// @route   GET /api/responses
// @access  Admin
exports.getResponses = async (req, res) => {
  try {
    const responses = await Response.find().populate('answers.questionId');
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Submit responses
// @route   POST /api/responses
// @access  Public
/*exports.submitResponse = async (req, res) => {
  try {
    console.log(req.body)
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ message: 'Answers are required' });
    }

    const newResponse = new Response({ answers });
    await newResponse.save();

    res.status(201).json({ message: 'Response saved successfully', newResponse });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};*/
exports.submitResponse = async (req, res) => {
  try {
    console.log(req.body)
    const { answers } = req.body;

    // Validate that answers is an array and not empty
    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ message: 'Answers are required' });
    }

    // Ensure each answer has a valid questionId and selectedOption
    const formattedAnswers = answers.map((answer) => ({
      questionId: answer.questionId, // Ensure this is a valid ObjectId
      selectedOption: answer.selectedOption,
    }));

    const newResponse = new Response({
      answers: formattedAnswers,  // Pass the answers array
      submissionId: new mongoose.Types.ObjectId(), // Create a unique submission ID
      createdAt: new Date(), // Capture the current date/time
    });

    await newResponse.save(); // Save to the database

    res.status(201).json({ message: 'Response saved successfully', newResponse });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
};
