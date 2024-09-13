import { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css'

const App = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from the backend
  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="app-container">
      <h1>Student Management</h1>
      <StudentForm fetchStudents={fetchStudents} />
      <StudentList students={students} fetchStudents={fetchStudents} />
    </div>
  );
};

export default App;
