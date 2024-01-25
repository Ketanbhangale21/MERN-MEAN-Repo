import React from "react";
import axios from "axios";
import { useState } from "react";

function Assignment1() {
  const [employeeArray, SetEmployeeArray] = useState([]);
  function getDataButtonClick() {
    let url = "http://localhost:3005/api/employee";
    axios.get(url).then((resData) => {
      console.log(resData.data);
      SetEmployeeArray(resData.data);
    });
  }
  let resultArray = employeeArray.map((item) => (
    <div key={item.empid} className="col-md-4 mb-4">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{item.name}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">Email: {item.email}</p>
          <p className="card-text">Department: {item.department}</p>
          <p className="card-text">Phone: {item.phone}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div align="center">
      <p>Aajax Demo</p>
      <input type="button" onClick={getDataButtonClick} value="Button"></input>
      <div className="container">
        <div className="row">{resultArray}</div>
      </div>
    </div>
  );
}

export default Assignment1;
