import React from "react";

function DoctorComponent() {
  let doctorsArray = [
    {
      doctorID: 111,
      designation: "Ortho",
      experience: "12-years",
      dname: "Alex",
      contact: 2891292,
    },
    {
      doctorID: 211,
      designation: "Thyro",
      experience: "15-years",
      dname: "Brian",
      contact: 8393921,
    },
    {
      doctorID: 311,
      designation: "Dentist",
      experience: "11-years",
      dname: "Rumon",
      contact: 8291219,
    },
    {
      doctorID: 411,
      designation: "Heart",
      experience: "18-years",
      dname: "Diana",
      contact: 2182182,
    },
  ];
  let result = doctorsArray.map((item) => {
    return (
      <tr>
        <td> {item.doctorID} </td>
        <td> {item.dname} </td>
        <td> {item.designation} </td>
        <td> {item.experience} </td>
        <td> {item.contact} </td>
      </tr>
    );
  });
  return (
    <div>
      <table
        border="2"
        width="400"
        cellspacing="0"
        cellpadding="5"
        align="center"
      >
        <tr>
          <th>Doctor Id</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Experience</th>
          <th>Contact</th>
        </tr>
        {result}
      </table>
    </div>
  );
}

export default DoctorComponent;
