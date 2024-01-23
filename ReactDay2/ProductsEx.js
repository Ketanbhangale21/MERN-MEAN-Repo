import React from "react";
import { useState } from "react";

function ProductsEx() {
  const [pname, setPname] = useState("");
  const [price, setprice] = useState();
  const [quantity, setquantity] = useState();
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);
  function getTotal() {
    var total = price * quantity;
    setTotal(total);
    setResult(
      <table
        border="2"
        width="400"
        cellSpacing="0"
        cellPadding="5"
        align="center"
      >
        <tr>
          <td>{pname}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{total}$</td>
        </tr>
      </table>
    );
  }
  return (
    <div>
      <table
        border="2"
        width="400"
        cellSpacing="0"
        cellPadding="5"
        align="center"
      >
        <tr>
          <td align="center" colSpan="7">
            Product Details
          </td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>
            <input
              type="text"
              id="t1"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <th>Price per item :</th>
          <td>
            <input
              type="number"
              id="t2"
              value={price}
              onChange={(e) => setprice(Number(e.target.value))}
            />
            $
          </td>
        </tr>
        <tr>
          <th>Quantity :</th>
          <td>
            <input
              type="number"
              id="t3"
              value={quantity}
              onChange={(e) => setquantity(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td align="center" colSpan={7}>
            {" "}
            <input type="button" value={"Total"} onClick={getTotal}></input>
          </td>
        </tr>
      </table>
      {result}
    </div>
  );
}

export default ProductsEx;
