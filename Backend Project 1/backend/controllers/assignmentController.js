const Assignment = require('../models/assignment');

// @desc    Create a new assignment
// @route   POST /api/assignments
// @access  Public
exports.createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    const savedAssignment = await assignment.save();
    res.status(201).json(savedAssignment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all assignments
// @route   GET /api/assignments
// @access  Public
exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('student').populate('course');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get an assignment by ID
// @route   GET /api/assignments/:id
// @access  Public
exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id).populate('student').populate('course');
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update an assignment by ID
// @route   PUT /api/assignments/:id
// @access  Public
exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete an assignment by ID
// @route   DELETE /api/assignments/:id
// @access  Public
exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) {
      return res.status(404).json({ message: 'Assignment not found' });
    }
    res.status(200).json({ message: 'Assignment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
