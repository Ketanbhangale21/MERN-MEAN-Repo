import React, { useState } from "react";

function EmployeeCrud() {
  const [employees, setEmployees] = useState([]);
  const [empno, setEmpno] = useState("");
  const [ename, setEname] = useState("");
  const [job, setJob] = useState("");
  const [sal, setSal] = useState("");
  const [deptno, setDeptno] = useState("");

  function addEmployee() {
    if (empno && ename && job && sal && deptno) {
      const newEmployee = {
        empno,
        ename,
        job,
        sal,
        deptno,
      };

      setEmployees([...employees, newEmployee]);
      clearForm();
    }
  }
  function updateEmployee() {
    if (empno && ename && job && sal && deptno) {
      const updatedEmployees = employees.map((employee) =>
        employee.empno === empno ? { empno, ename, job, sal, deptno } : employee
      );
      setEmployees(updatedEmployees);
      clearForm();
    }
  }
  function deleteEmployee(empnoToDelete) {
    const updatedEmployees = employees.filter(
      (employee) => employee.empno !== empnoToDelete
    );
    setEmployees(updatedEmployees);
  }
  function clearForm() {
    setEmpno("");
    setEname("");
    setJob("");
    setSal("");
    setDeptno("");
  }
  function editEmployee(empnoToEdit) {
    const employeeToEdit = employees.find(
      (employee) => employee.empno === empnoToEdit
    );
    if (employeeToEdit) {
      setEmpno(employeeToEdit.empno);
      setEname(employeeToEdit.ename);
      setJob(employeeToEdit.job);
      setSal(employeeToEdit.sal);
      setDeptno(employeeToEdit.deptno);
    }
  }

  return (
    <div>
      <h2>Employee CRUD Operations</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Dept No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empno}>
              <td>{employee.empno}</td>
              <td>{employee.ename}</td>
              <td>{employee.job}</td>
              <td>{employee.sal}</td>
              <td>{employee.deptno}</td>
              <td>
                <button onClick={() => editEmployee(employee.empno)}>
                  Edit
                </button>
                <button onClick={() => deleteEmployee(employee.empno)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add/Update Employee</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Emp No:</label>
            </td>
            <td>
              <input
                type="text"
                value={empno}
                onChange={(e) => setEmpno(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <input
                type="text"
                value={ename}
                onChange={(e) => setEname(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Job:</label>
            </td>
            <td>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Salary:</label>
            </td>
            <td>
              <input
                type="text"
                value={sal}
                onChange={(e) => setSal(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Dept No:</label>
            </td>
            <td>
              <input
                type="text"
                value={deptno}
                onChange={(e) => setDeptno(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={updateEmployee}>Update Employee</button>

      <button onClick={addEmployee}>Add Employee</button>

      <button onClick={clearForm}>Clear Form</button>
    </div>
  );
}

export default EmployeeCrud;
