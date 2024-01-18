var Express = require("express");

var app = Express();
app.use(Express.static("Public")); //including static files data images,videos etc
app.set("view engine", "hbs");
app.get("/", function (req, res) {
  let dataObj = {};
  dataObj.customerObj = [
    { Name: "Alfreds Futterkiste", City: "Berlin", Country: "Germany" },
    {
      Name: "Ana Trujillo Emparedados y helados",
      City: "México D.F.",
      Country: "Mexico",
    },
    { Name: "Antonio Moreno Taquería", City: "México D.F.", Country: "Mexico" },
    { Name: "Around the Horn", City: "London", Country: "UK" },
    { Name: "B's Beverages", City: "London", Country: "UK" },
    { Name: "Berglunds snabbköp", City: "Luleå", Country: "Sweden" },
    { Name: "Blauer See Delikatessen", City: "Mannheim", Country: "Germany" },
  ];
  res.render("index-hbs", dataObj);
});
var server = app.listen(3005, function () {});

console.log(
  "This is My first Express App browse it at : http://localhost:3005/"
);
