const mongoose = require('mongoose');

// Define Student schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export Student model
module.exports = mongoose.model('Student', studentSchema);
