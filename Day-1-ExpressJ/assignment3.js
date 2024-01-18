const Express = require("express");

var app = Express();
app.get("/", function (req, res) {
  let productId = 10256;
  let productName = "LG Printer";
  let unitPrice = 2500;
  let quantity = 3;
  //   let totalAmount = 7500;
  let totalAmount = unitPrice * quantity;

  let html = `
  <style>
        h2{
            font-family:roboto;
        }
        table {
          font-family:roboto;
          border-collapse: collapse;
          width: 50%;
          margin: auto;
        }
        th, td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
    </head>
    <body>
      <h2 align='center'>Product Details</h2>
      <table>
        <tr>
          <th>Product Id</th>
          <td>${productId}</td>
        </tr>
        <tr>
          <th>Product Name</th>
          <td>${productName}</td>
        </tr>
        <tr>
          <th>Unit Price</th>
          <td>$ ${unitPrice}</td>
        </tr>
        <tr>
          <th>Quantity</th>
          <td>${quantity}</td>
        </tr>
        <tr>
          <th>Total Amount</th>
          <td>$ ${totalAmount}</td>
        </tr>
      </table>
  `;
  res.send(html);
});
var server = app.listen(3005, function () {});

console.log("This is Express App browse it at : http://localhost:3005/");
