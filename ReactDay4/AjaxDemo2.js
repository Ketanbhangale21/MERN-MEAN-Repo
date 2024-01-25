import React from "react";
import { useState } from "react";
import axios from "axios";

function AjaxDemo2() {
  const [dataArray, SteDataArray] = useState([]);
  function getUserList() {
    let url = "https://reqres.in/api/users";
    axios.get(url).then((respone) => {
      console.log(respone.data.data);
      SteDataArray(respone.data.data);
    });
  }
  let resultArray = dataArray.map((item) => (
    <tbody key={item.id}>
      <tr
        style={{
          borderBottom: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <td align="center">{item.id}</td>
        <td align="center">{item.email}</td>
        <td align="center">{item.first_name}</td>
        <td align="center">{item.last_name}</td>
        <td align="center">
          <img
            src={item.avatar}
            alt=""
            style={{ width: "50px", borderRadius: "50%" }}
          />
        </td>
      </tr>
    </tbody>
  ));
  return (
    <div align="center">
      <div>
        <button onClick={() => getUserList()}>Button</button>
      </div>
      <table
        style={{ borderCollapse: "collapse", width: "80%", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "lightblue" }}>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        {resultArray}
      </table>
    </div>
  );
}

export default AjaxDemo2;
