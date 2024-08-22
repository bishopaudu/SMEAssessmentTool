// routes/responseRoutes.js
/*const express = require('express');
const { getResponses } = require('../controllers/responseController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/').get(protect, admin, getResponses);

module.exports = router;*/
// routes/responseRoutes.js
const express = require('express');
const { getResponses, submitResponse } = require('../controllers/responseController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, admin, getResponses)  // Admin route to get all responses
  .post(submitResponse);  // Public route to submit responses

module.exports = router;

