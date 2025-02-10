let express = require('express');
const { checkToken } = require('./checkTokenMiddleware');

let app = express();
app.use(express.json());

app.get("/",checkToken, (req, res) => {
    res.send({status: 1, msg: 'Home page calling ok'});
});

app.get("/news", checkToken ,(req, res) => {
    res.send({status: 2, msg: 'news page calling...'});
});


// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



