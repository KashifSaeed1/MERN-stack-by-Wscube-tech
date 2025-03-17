const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

app.get("/about", (req, res) => {
  res.json({
    company: "Tech Corp",
    description: "We provide innovative tech solutions.",
  });
});

app.get("/contact", (req, res) => {
  res.json({
    email: "support@techcorp.com",
    phone: "+1234567890",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

