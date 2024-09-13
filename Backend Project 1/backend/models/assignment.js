const mongoose = require('mongoose');

// Define Assignment schema
const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  submissionDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export Assignment model
module.exports = mongoose.model('Assignment', assignmentSchema);
