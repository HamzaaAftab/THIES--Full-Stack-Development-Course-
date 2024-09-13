import React, { useState } from 'react';
import '../App.css';

const StudentList = ({ students, fetchStudents }) => {
  const [editing, setEditing] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');

  const handleDelete = async (id) => {
    console.log("Deleting student with ID:", id); // Add this line for debugging
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'DELETE',
      });
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
  
  const handleEdit = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editName, age: parseInt(editAge) }),
      });
      setEditing(null);
      fetchStudents();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {editing === student._id ? (
              <>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="New name"
                />
                <input
                  type="number"
                  value={editAge}
                  onChange={(e) => setEditAge(e.target.value)}
                  placeholder="New age"
                />
                <button onClick={() => handleEdit(student._id)}>Save</button>
              </>
            ) : (
              <>
                <span>{student.name} (Age: {student.age})</span>
                <button onClick={() => {
                  setEditing(student._id);
                  setEditName(student.name);
                  setEditAge(student.age);
                }}>Edit</button>
                <button onClick={() => handleDelete(student._id)}>Delete</button>

              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
