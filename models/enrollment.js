const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  enrollmentDate: Date,
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);