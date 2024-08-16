const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const assessmentRoutes = require('./routes/assessments');
const questionRoutes = require('./routes/questions');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api', assessmentRoutes);
app.use('/api', questionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
