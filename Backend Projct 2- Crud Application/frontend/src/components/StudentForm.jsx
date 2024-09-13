import React, { useState } from 'react';
import '../App.css'

const StudentForm = ({ fetchStudents }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (kinza) => {
    kinza.preventDefault();
    if (!name || !age) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age: parseInt(age) }),
      });
      fetchStudents(); // Refresh the list of students after adding
      setName('');
      setAge('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
