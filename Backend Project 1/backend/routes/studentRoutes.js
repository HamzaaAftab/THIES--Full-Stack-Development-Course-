const express = require('express');
const { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } = require('../controllers/studentController');

// Initialize router
const router = express.Router();

// CRUD routes for students
router.post('/', createStudent); // Create a new student
router.get('/', getAllStudents); // Get all students
router.get('/:id', getStudentById); // Get a specific student by ID
router.put('/:id', updateStudent); // Update a specific student by ID
router.delete('/:id', deleteStudent); // Delete a specific student by ID

// Export router
module.exports = router;
