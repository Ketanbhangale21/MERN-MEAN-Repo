import React from "react";
import { useState } from "react";

function ProductsEx() {
  const [pname, setPname] = useState("Xyz");
  const [price, setprice] = useState(3200);
  const [quantity, setquantity] = useState(6);
  const [total, setTotal] = useState("");
  function Calculate() {
    var total = price * quantity;
    setTotal(total);
  }
  return (
    <div>
      <fieldset>
        <legend>User Login</legend>
        Product Name : {pname} <br />
        Price : {price} <br />
        Quantity : {quantity} <br />
        <input type="button" onClick={Calculate} value="Total" />
        <p>{total}</p>
      </fieldset>
    </div>
  );
}

export default ProductsEx;
