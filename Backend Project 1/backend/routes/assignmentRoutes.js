const express = require('express');
const { createAssignment, getAllAssignments, getAssignmentById, updateAssignment, deleteAssignment } = require('../controllers/assignmentController');

// Initialize router
const router = express.Router();

// CRUD routes for assignments
router.post('/', createAssignment); // Create a new assignment
router.get('/', getAllAssignments); // Get all assignments
router.get('/:id', getAssignmentById); // Get a specific assignment by ID
router.put('/:id', updateAssignment); // Update a specific assignment by ID
router.delete('/:id', deleteAssignment); // Delete a specific assignment by ID

// Export router
module.exports = router;
