const express = require("express");

const app = express();
const PORT = 3001;

// Sample product data
const products = [
  { id: 1, name: "Laptop", category: "electronics", price: "high" },
  { id: 2, name: "Smartphone", category: "electronics", price: "medium" },
  { id: 3, name: "T-Shirt", category: "clothing", price: "low" },
  { id: 4, name: "Jeans", category: "clothing", price: "medium" },
  { id: 5, name: "Headphones", category: "electronics", price: "low" },
  { id: 6, name: "Shoes", category: "clothing", price: "high" },
];

app.get("/products", (req, res) => {
    console.log("req.query ===>", req.query);
  const { category, price } = req.query;

  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price.toLowerCase() === price.toLowerCase()
    );
  }

  res.json(filteredProducts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
