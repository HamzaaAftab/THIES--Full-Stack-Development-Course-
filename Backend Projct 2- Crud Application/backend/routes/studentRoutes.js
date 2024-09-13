const express = require('express');
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentById,
} = require('../controllers/studentController.js');

const router = express.Router();

// Routes for CRUD operations
router.get('/', getStudents);          // Get all students
router.get('/:id', getStudentById);          // Get all students
router.post('/', createStudent);       // Create a new student
router.put('/:id', updateStudent);     // Update a student by ID
router.delete('/:id', deleteStudent);  // Delete a student by ID

module.exports = router;
