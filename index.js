// const express = require("express");
// const app = express();
// const PORT = 3002;
// let myToken = "12345";

// let checkToken = (req, res, next) => {
//   let token = req.headers.authorization; 

//   if (!token) {
//     return res.send({
//       status: 0,
//       msg: "Please fill the token",
//     });
//   }

//   token = token.replace("Bearer ", "").trim();

//   if (token !== myToken) {
//     return res.send({
//       status: 0,
//       msg: "Please fill the correct token",
//     });
//   }
//   next(); 
// };

// app.get("/", (req, res) => {
//   res.send({
//     status: 1,
//     message: "Home page calling",
//   });
// });

// app.get("/news", checkToken, (req, res) => {
//   res.send({
//     status: 1,
//     message: "News API",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// not clear above code


// Question 1: 
// Create a middleware function that logs the HTTP method and URL of each request before passing it to the next middleware.
// const express = require('express');
// const app = express();
// const PORT = 3004;

// let checkurl = (req, res , next) => {
//     console.log(`calling: : :  ===>  [${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();

// }  
// app.use(checkurl);

// app.get('/', (req, res) => {
//   res.send('home route is calling')
// });


// app.listen(PORT, ()=>{
//   console.log(`server is running on the port ${PORT}`)
// })



// Write middleware that logs the current timestamp of when a request is received.
const express = require("express");
const app = express();
const PORT = 3004;

let checkurl = (req, res, next) => {
  // console.log(`calling: : :  ===>  [${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log(res.json({ data: new Date().toISOString() }));
  next();
};
app.use(checkurl);

app.get("/", (req, res) => {
  res.send("home route is calling");
});

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});


