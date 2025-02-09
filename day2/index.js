let http = require('http');
let server = http.createServer((req, res) => {
    if(req.url === "/news"){
        let obj = {
            status: 1,
            data : [
                {
                    newsTitle: 'ws',
                    newsDes: 'Ws hello'
                },
                {
                    newsTitle: 'IIP',
                    newsDes: 'IIP hello'
                },
            ]
        }
        res.end(JSON.stringify(obj));    
    }
    if(req.url === "/about"){
        res.end('wescube about');
    }
    if(req.url === "/course"){
        res.end('wescube course');
    }
    if(req.url === "/"){
        res.end('wescube tech');
    }
});
server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
