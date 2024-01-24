import React from "react";

function ProductList({ category }) {
  const tableCellStyle = {
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };
  const products = [
    {
      id: 1,
      name: "Product A",
      category: "Electronics",
      price: 50.99,
      stock: 10,
    },
    { id: 2, name: "Product B", category: "Clothing", price: 29.99, stock: 20 },
    {
      id: 3,
      name: "Product C",
      category: "Electronics",
      price: 99.99,
      stock: 5,
    },
    { id: 4, name: "Product D", category: "Clothing", price: 39.99, stock: 15 },
    // Add more product data as needed
  ];

  // Filter products based on the given category
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  console.log(filteredProducts);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70%",
          border: "2px solid black",
          borderRadius: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333", margin: "20px 0" }}>
          Product Details
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "limegreen", color: "white" }}>
              <th style={tableCellStyle}>ID</th>
              <th style={tableCellStyle}>Name</th>
              <th style={tableCellStyle}>Category</th>
              <th style={tableCellStyle}>Price</th>
              <th style={tableCellStyle}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr
                key={product.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#e0e0e0",
                }}
              >
                <td style={tableCellStyle}>{product.id}</td>
                <td style={tableCellStyle}>{product.name}</td>
                <td style={tableCellStyle}>{product.category}</td>
                <td style={tableCellStyle}>${product.price.toFixed(2)}</td>
                <td style={tableCellStyle}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
