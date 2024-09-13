const express = require('express');
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

// Initialize router
const router = express.Router();

// CRUD routes for courses
router.post('/', createCourse); // Create a new course
router.get('/', getAllCourses); // Get all courses
router.get('/:id', getCourseById); // Get a specific course by ID
router.put('/:id', updateCourse); // Update a specific course by ID
router.delete('/:id', deleteCourse); // Delete a specific course by ID

// Export router
module.exports = router;
