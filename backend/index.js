/*const express = require('express');
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
});*/

// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const questionRoutes = require('./routes/questionRoutes');
const responseRoutes = require('./routes/responseRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const adminRoutes = require('./routes/adminRoutes');



const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/questions', questionRoutes);
app.use('/api/responses', responseRoutes);
app.use('/api/admin', adminRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

