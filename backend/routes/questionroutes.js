// routes/questionRoutes.js
const express = require('express');
const {
  getQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
} = require('../controllers/questionController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getQuestions)
  .post(protect, admin, addQuestion);

router.route('/:id')
  .delete(protect, admin, deleteQuestion)
  .put(protect, admin, updateQuestion);

module.exports = router;
