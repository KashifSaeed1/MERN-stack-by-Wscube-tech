const express = require("express");
const app = express();
const PORT = 3002;
let myToken = "12345";

let checkToken = (req, res, next) => {
  let token = req.headers.authorization; 

  if (!token) {
    return res.send({
      status: 0,
      msg: "Please fill the token",
    });
  }

  token = token.replace("Bearer ", "").trim();

  if (token !== myToken) {
    return res.send({
      status: 0,
      msg: "Please fill the correct token",
    });
  }
  next(); 
};

app.get("/", (req, res) => {
  res.send({
    status: 1,
    message: "Home page calling",
  });
});

app.get("/news", checkToken, (req, res) => {
  res.send({
    status: 1,
    message: "News API",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// not clear above code