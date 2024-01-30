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
  let result = employees.map((item, index) => {
    return (
      <tr>
        {Object.values(item).map((value) => (
          <td>{value}</td>
        ))}
      </tr>
    );
  });

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
        <tbody>{result}</tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
