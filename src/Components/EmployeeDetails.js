import React from 'react';
import { useParams } from 'react-router-dom';
import '../Content/EmployeeDetails.css';

const EmployeeDetails = ({ employees }) => {
  const { id } = useParams();
  const employee = employees[parseInt(id)];

  if (!employee) {
    return <h2 className="employee-details">Employee not found</h2>;
  }

  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.dept}</p>
    </div>
  );
};

export default EmployeeDetails;
