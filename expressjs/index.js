let express = require('express');

let app = express();
app.use(express.json());
let myToken = '12345';
let pass = '1234';

//MiddleWare for  token
let checkToken = (req, res, next)=>{
    if(req.query.token === "" || req.query.token === undefined){
        return res.send(
            {
                status: 0,
                msg: "Please fill the token"
            }
        )
    }
    if(req.query.token != myToken){
        return res.send(
            {
                status: 0,
                msg: "Please fill the correct token"
            }
        )
    }
    next();
}
app.use(checkToken) //MiddleWare

//MiddleWare for password
app.use((req, res, next)=>{ // direct apply middleware
    if(req.query.pass === "" || req.query.pass === undefined){
        return res.send(
            {
                status: 0,
                msg: "Please fill the Password"
            }
        )
    }
    if(req.query.pass != pass){
        return res.send(
            {
                status: 0,
                msg: "Please fill the correct Password"
            }
        )
    }
    next();
})


app.get("/", (req, res) => {
    res.send({status: 1, msg: 'Home page calling ok'});
});

app.get("/news", (req, res) => {
    res.send({status: 2, msg: 'news page calling...'});
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



