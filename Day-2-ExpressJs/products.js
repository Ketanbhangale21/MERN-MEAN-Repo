const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
var Express = require("express");

var app = Express();
app.use(Express.static("Public")); //including static files data images,videos etc
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("main", {});
});
app.get("/products", function (req, res) {
  res.render("products", { total: "" });
});
app.post("/calculateTotal", (req, res) => {
  const unitPrice = parseFloat(req.body.unitPrice);
  const quantity = parseInt(req.body.quantity);

  if (!isNaN(unitPrice) && !isNaN(quantity)) {
    const total = unitPrice * quantity;
    res.render("products", { total: total.toFixed(2) });
  } else {
    res.render("products", { total: "Invalid input" });
  }
});

var server = app.listen(3005, function () {});

console.log(
  "This is My first Express App browse it at : http://localhost:3005/"
);
