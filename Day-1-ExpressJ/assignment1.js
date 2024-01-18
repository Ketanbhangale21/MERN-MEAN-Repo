var Express = require("express");

var app = Express();
app.get("/", function (req, res) {
  let str = "<h1 align='center'> Web Application using Express Js </h1>";
  str += "<hr>";
  str += `
  <div style='color:Green;font-family:roboto; border:1px solid red;padding:10px;'>
        Employee Id :  2238894  <br/>
				Employee Name  :  Ketan <br/>
				Employee Job : ASE <br/>
				Employee Deptno :  10 <br/>
				Employee EmailId :  abc.xyz@gmail.com  <br/>
  </div>
  `;
  res.send(str);
});
var server = app.listen(3005, function () {});

console.log(
  "This is My first Express App browse it at : http://localhost:3005/"
);
