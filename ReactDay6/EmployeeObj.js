import React from "react";

function EmployeeTable() {
  // Array of employee objects
  const employees = [
    { id: 1, name: "John Doe", department: "Engineering", salary: 50000 },
    { id: 2, name: "Jane Smith", department: "Marketing", salary: 60000 },
    { id: 3, name: "Michael Johnson", department: "Finance", salary: 55000 },
    { id: 4, name: "Emily Brown", department: "HR", salary: 52000 },
    { id: 5, name: "David Lee", department: "Sales", salary: 58000 },
  ];
  const rows = [];
  for (let employee of employees) {
    rows.push(
      <tr>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.department}</td>
        <td>{employee.salary}</td>
      </tr>
    );
  }
  return (
    <div>
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
