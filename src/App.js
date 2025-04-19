import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const saveData = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      saveData(updatedEmployees); 
      return updatedEmployees; 
    });
  };

  const loadEmployees = () => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleFormSubmit = (employee) => {
    addEmployee(employee);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Form</h1>
        <nav>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/employee-form')}>New Employee</button>
          <button onClick={() => navigate('/employee-list')}>Employee List</button>
        </nav>
      </header>
      <Routes>
        <Route
          path="/employee-form"
          element={
            <EmployeeForm
              handleFormSubmit={handleFormSubmit}
              saveData={() => saveData(employees)}
            />
          }
        />
        <Route path="/employee-list" element={<EmployeeList employees={employees} />} />
        <Route path="/employees/:id" element={<EmployeeDetails employees={employees} />} />
      </Routes>
    </div>
  );
}

export default App;
