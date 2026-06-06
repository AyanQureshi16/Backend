const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.get('/', async (req, res) => {
  const enrollments = await Enrollment.find();
  res.json(enrollments);
});

router.post('/', async (req, res) => {
  const enrollment = new Enrollment(req.body);
  await enrollment.save();
  res.json(enrollment);
});

router.delete('/:id', async (req, res) => {
  await Enrollment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Enrollment deleted' });
});

// Bonus: course ke sab students
router.get('/course/:courseId/students', async (req, res) => {
  const enrollments = await Enrollment.find({ courseId: req.params.courseId });
  res.json(enrollments);
});

// Bonus: student ke sab courses
router.get('/student/:studentId/courses', async (req, res) => {
  const enrollments = await Enrollment.find({ studentId: req.params.studentId });
  res.json(enrollments);
});

module.exports = router;