import React from 'react';
import { Link } from 'react-router-dom';
import '../Content/EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2 className="employee-list-title">Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee, index) => (
          <li key={index}>
            <Link to={`/employees/${index}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;