import React from "react";

function StudentComponent() {
  let sid = 11059;
  let sname = "Clark Superman";
  let course = "Physics";
  let age = 28;
  let total = 480;
  return (
    <div>
      <h1>Student Information</h1>
      <table
        border="2"
        width="400"
        cellspacing="0"
        cellpadding="5"
        align="center"
      >
        <tr>
          <th>StudentId</th>
          <th>Student Name</th>
          <th>Course</th>
          <th>Age</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{sid}</td>
          <td>{sname}</td>
          <td>{course}</td>
          <td>{age}</td>
          <td>{total}</td>
        </tr>
      </table>
    </div>
  );
}

export default StudentComponent;
