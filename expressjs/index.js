let express = require('express');
require("dotenv").config();


const { checkToken } = require('./checkTokenMiddleware');

let app = express();
app.use(express.json());

console.log("MyToken", process.env.MYToken)

app.get("/",checkToken, (req, res) => {
    res.send({status: 1, msg: 'Home page calling ok'});
});

app.get("/news", checkToken ,(req, res) => {
    res.send({status: 2, msg: 'news page calling...'});
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



