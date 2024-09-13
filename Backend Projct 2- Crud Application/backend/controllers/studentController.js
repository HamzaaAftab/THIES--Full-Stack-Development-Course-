const { json } = require('express');
const Student = require('../models/studentModel.js');

// @desc    Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student); // Use 200 OK instead of 202
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// @desc    Create new student
exports.createStudent = async (req, res) => {
  const { name, age } = req.body;

  try {
    const newStudent = new Student({ name, age });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    student.name = name || student.name;
    student.age = age || student.age;
    
    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await Student.findByIdAndDelete(id); // Use Student.findByIdAndDelete
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
