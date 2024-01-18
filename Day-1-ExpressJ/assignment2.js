var Express = require("express");

var app = Express();
app.get("/", function (req, res) {
  let EmployeeId = 223787;
  let EmployeeName = "Ketan";
  let EmployeeJob = "ASE";
  let EmployeeDeptno = 10;
  let EmployeeEmailId = "abc.xyz@gmail.com";
  let str = "<h1 align='center'> Welcome Employee Portal </h1>";

  str += `
  <div style='color:Green;font-family:roboto; border:1px solid red;padding:10px;'>
                Employee Id :  ${EmployeeId}  <br/>
				Employee Name  :  ${EmployeeName} <br/>
				Employee Job : ${EmployeeJob} <br/>
				Employee Deptno :  ${EmployeeDeptno} <br/>
				Employee EmailId :  ${EmployeeEmailId}  <br/>
  </div>
  `;
  res.send(str);
});
var server = app.listen(3005, function () {});

console.log(
  "This is My first Express App browse it at : http://localhost:3005/"
);
