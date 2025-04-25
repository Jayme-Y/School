import React from 'react';
import { Link } from 'react-router-dom';
import '../Content/EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list-container">
      <div className="employee-list-inner">
        <h2 className="employee-list-title">Employee List</h2>
        <ul className="employee-list">
          {employees.map((employee, index) => (
            <li key={index} className="employee-list-item">
              <Link to={`/employees/${index}`} className="employee-link">{employee.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;