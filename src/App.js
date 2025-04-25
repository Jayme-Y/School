import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetails from './Components/EmployeeDetails';
import logo from './logo.svg';

function App() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
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

  const handleNavigation = (path) => {
    navigate(path);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Employee Form</h1>
        <nav>
          <button onClick={() => handleNavigation('/')}>Home</button>
          <button onClick={() => handleNavigation('/employee-form')}>New Employee</button>
          <button onClick={() => handleNavigation('/employee-list')}>Employee List</button>
        </nav>
      </header>
      <div ref={contentRef}>
        <Routes>
          <Route
            path="/employee-form"
            element={
              <EmployeeForm
                handleFormSubmit={handleFormSubmit}
              />
            }
          />
          <Route path="/employee-list" element={<EmployeeList employees={employees} />} />
          <Route path="/employees/:id" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
