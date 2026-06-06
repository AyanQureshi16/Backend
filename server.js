const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/enrollments', require('./routes/enrollmentRoutes'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});