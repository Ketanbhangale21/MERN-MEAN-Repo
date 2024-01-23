import React, { useState } from "react";

function CrudComponent() {
  const [deptsArray, setDeptsArray] = useState([]);
  const [deptno, setDeptno] = useState("");
  const [dname, setDname] = useState("");
  const [loc, setLoc] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  function getDeptsData() {
    let tempArray = [
      { deptno: 10, dname: "Accounts", loc: "Hyd" },
      { deptno: 20, dname: "Sales", loc: "Pune" },
      { deptno: 30, dname: "Marketing", loc: "Hyd" },
      { deptno: 40, dname: "Operations", loc: "Chennai" },
    ];
    setDeptsArray(tempArray);
  }

  function newDept() {
    if (deptno && dname) {
      let tempArray = [...deptsArray];
      let dataObj = {
        deptno: parseInt(deptno),
        dname: dname,
        loc: loc,
      };

      if (isUpdate && updateIndex !== null) {
        // Update existing department if in update mode
        tempArray[updateIndex] = dataObj;
        setIsUpdate(false);
        setUpdateIndex(null);
      } else {
        // Add new department if not in update mode
        tempArray.push(dataObj);
      }

      setDeptsArray(tempArray);
      setDeptno("");
      setDname("");
      setLoc("");
      setIsUpdate(false);
      setUpdateIndex(null);
    }
  }

  function deleteDept(dno) {
    let updatedDeptsArray = deptsArray.filter((item) => item.deptno !== dno);
    setDeptsArray(updatedDeptsArray);
  }

  function updateDept(index) {
    // Set the state variables with the department data for update
    const deptToUpdate = deptsArray[index];
    setDeptno(deptToUpdate.deptno.toString());
    setDname(deptToUpdate.dname);
    setLoc(deptToUpdate.loc);

    // Set update mode to true and store the index to update
    setIsUpdate(true);
    setUpdateIndex(index);
  }

  let resultArray2 = deptsArray.map((item, index) => {
    return (
      <tr key={index}>
        <td> {item.deptno} </td>
        <td> {item.dname} </td>
        <td> {item.loc} </td>
        <td>
          <a href="javascript:void(0);" onClick={() => deleteDept(item.deptno)}>
            Delete
          </a>
        </td>
        <td>
          <a href="javascript:void(0);" onClick={() => updateDept(index)}>
            Update
          </a>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1 align="center">Crud Operations</h1>
      <hr></hr>

      <table
        border="2"
        width="400"
        cellSpacing="0"
        cellPadding="5"
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                value={deptno}
                onChange={(e) => setDeptno(e.target.value)}
                placeholder="Dept No."
              ></input>
            </td>
            <td>
              <input
                type="text"
                value={dname}
                onChange={(e) => setDname(e.target.value)}
                placeholder="Department Name"
              ></input>
            </td>
            <td>
              <input
                type="text"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                placeholder="Location"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={isUpdate ? "Update" : "Insert"}
                onClick={newDept}
              ></input>
            </td>
            <td>
              {" "}
              <input
                type="button"
                onClick={getDeptsData}
                value="All Depts"
              ></input>
            </td>
          </tr>
          <tr>
            <th>Dept Number</th>
            <th>Dept Name</th>
            <th>Location</th>
            <th colSpan={2}>Operations</th>
          </tr>
          {resultArray2}
        </tbody>
      </table>
    </div>
  );
}

export default CrudComponent;
