const Question = require('./models/Question');
const postController = async (req, res) => {
    const question = new Question(req.body);
    try {
      const savedQuestion = await question.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

const getController = async (req, res) => {
    try {
      const questions = await Question.find();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }  

  module.exports = {
      postController,
      getController,
  }