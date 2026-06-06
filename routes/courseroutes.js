const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post('/', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

router.put('/:id', async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
});

router.delete('/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course deleted' });
});

module.exports = router;