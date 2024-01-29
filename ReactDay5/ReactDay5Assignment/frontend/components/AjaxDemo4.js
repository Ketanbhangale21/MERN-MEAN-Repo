import React from "react";
import axios from "axios";
import { useState } from "react";
import "./ajax.css";

function AjaxDemo4() {
  const [stdid, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ftmarks, setFtmarks] = useState("");
  const [stmarks, setStmarks] = useState("");
  const [contact, setContact] = useState("");
  const [remark, setRemark] = useState("");
  const [studentArray, setStudentArray] = useState([]);
  function getDataButtonClick() {
    let url = "http://localhost:3005/api/students";
    axios.get(url).then((resData) => {
      // console.log(resData.data);
      setStudentArray(resData.data);
    });
  }
  function addData() {
    let dataObj = {};
    dataObj.stdid = stdid;
    dataObj.name = name;
    dataObj.email = email;
    dataObj.ftmarks = ftmarks;
    dataObj.stmarks = stmarks;
    dataObj.remark = remark;
    dataObj.email = email;
    dataObj.contact = contact;

    let url = "http://localhost:3005/api/students";
    axios.post(url, dataObj).then((resData) => {
      // console.log(resData.data);
      alert("New record Inserted");
      getDataButtonClick();
    });
    clearFields();
  }

  function clearFields() {
    setName("");
    setId("");
    setEmail("");
    setFtmarks("");
    setStmarks("");
    setContact("");
    setRemark("");
  }
  function deleteDept(id) {
    let flag = window.confirm("Do you want to confirm");
    if (!flag) return;

    let url = "http://localhost:3005/api/students/remove/" + id;
    axios.delete(url).then((resData) => {
      // console.log(resData.data);
      alert(`Student at id ${id} deleted successfully`);
      getDataButtonClick();
    });
  }
  function editStudent(stdidToEdit) {
    const studentToEdit = studentArray.find(
      (student) => student.stdid === stdidToEdit
    );
    if (studentToEdit) {
      // setId(studentToEdit.id);
      setId(studentToEdit.stdid);
      setName(studentToEdit.name);
      setContact(studentToEdit.contact);
      setEmail(studentToEdit.email);
      setFtmarks(studentToEdit.ftmarks);
      setStmarks(studentToEdit.stmarks);
      setRemark(studentToEdit.remark);
    }
  }
  function updateStudent() {
    let dataObj = {};
    dataObj.stdid = stdid;
    dataObj.name = name;
    dataObj.email = email;
    dataObj.ftmarks = ftmarks;
    dataObj.stmarks = stmarks;
    dataObj.remark = remark;
    dataObj.email = email;
    dataObj.contact = contact;

    let url = "http://localhost:3005/api/students";
    axios.put(url, dataObj).then((resData) => {
      // console.log(resData.data);
      alert("Record Updated");
      getDataButtonClick();
    });
    clearFields();
  }

  return (
    <div align="center">
      <h2>Students Data</h2>
      <input
        className="btn btn-info"
        type="button"
        onClick={getDataButtonClick}
        value="View"
      ></input>
      <input
        className="btn btn-danger"
        type="button"
        onClick={clearFields}
        value="Clear"
      ></input>
      <tr>
        <td>
          <input
            type="number"
            value={stdid}
            onChange={(e) => setId(e.target.value)}
            placeholder="Student Id"
          ></input>
        </td>
        <td>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Student Name"
          ></input>
        </td>
        <td>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Student Email"
            style={{ width: "100%" }}
          ></input>
        </td>
        <td>
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Student Contact"
          ></input>
        </td>
        <td>
          <input
            type="number"
            value={ftmarks}
            onChange={(e) => setFtmarks(e.target.value)}
            placeholder="Marks-1"
          ></input>
        </td>
        <td>
          <input
            type="number"
            value={stmarks}
            onChange={(e) => setStmarks(e.target.value)}
            placeholder="Marks-2"
          ></input>
        </td>
        <td>
          <input
            type="text"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Remark"
          ></input>
        </td>

        <td>
          <input
            className="btn btn-primary"
            type="button"
            value="Update"
            onClick={updateStudent}
          ></input>
          <input
            className="btn btn-success"
            type="button"
            value=" Insert "
            onClick={addData}
          ></input>
        </td>
      </tr>
      <table
        className="table table-striped table-hover table-sm"
        border={2}
        style={{ margin: "10px" }}
      >
        <thead>
          <tr className="table-danger text-center">
            <th>ID</th>
            <th>Name</th>

            <th>Email</th>
            <th>Contact</th>
            <th>Marks-1</th>
            <th>Marks-2</th>
            <th>Remarks</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {studentArray.map((item, index) => (
            <tr
              className={index % 2 === 0 ? "table-primary" : "table-success"}
              key={index}
            >
              <td align="center">{item.stdid}</td>
              <td align="center">{item.name}</td>
              <td align="center">{item.email}</td>
              <td align="center">{item.contact}</td>
              <td align="center">{item.ftmarks}</td>
              <td align="center">{item.stmarks}</td>
              <td align="center">{item.remark}</td>
              <td align="center">
                <a
                  href="javascript:void(0);"
                  onClick={() => editStudent(item.stdid)}
                  style={{ color: "blue" }}
                >
                  <i className="bi bi-pencil-square"></i>
                </a>
                <span> | </span>
                <a
                  href="javascript:void(0);"
                  onClick={() => deleteDept(item.stdid)}
                  style={{ color: "red" }}
                >
                  <i className="bi bi-trash3"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AjaxDemo4;
