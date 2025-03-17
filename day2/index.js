// let http = require('http');
// let server = http.createServer((req, res) => {
//     if(req.url === "/news"){
//         let obj = {
//             status: 1,
//             data : [
//                 {
//                     newsTitle: 'ws',
//                     newsDes: 'Ws hello'
//                 },
//                 {
//                     newsTitle: 'IIP',
//                     newsDes: 'IIP hello'
//                 },
//             ]
//         }
//         res.end(JSON.stringify(obj));    
//     }
//     if(req.url === "/about"){
//         res.end('wescube about');
//     }
//     if(req.url === "/course"){
//         res.end('wescube course');
//     }
//     if(req.url === "/"){
//         res.end('wescube tech');
//     }
//     else if(){

//     }
// });
// server.listen(8000, () => {
//     console.log("Server is running on http://localhost:8000");
// });
 

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json"); 

  if (req.url === "/news") {
    let obj = {
      status: 1,
      data: [
        { newsTitle: "ws", newsDes: "Ws hello" },
        { newsTitle: "IIP", newsDes: "IIP hello" },
        {
          newsTitle: "Tech Update",
          newsDes: "New technology is emerging fast!",
        },
      ],
    };
    res.send(JSON.stringify(obj));
  } 
  else if (req.url === "/about") {
    res.end(
      JSON.stringify({
        message: "wescube about",
        founded: 2015,
        location: "India",
      })
    );
  } else if (req.url === "/course") {
    let courses = {
      status: 1,
      courses: [
        { id: 1, name: "Web Development", duration: "3 months" },
        { id: 2, name: "Data Science", duration: "6 months" },
        { id: 3, name: "Cybersecurity", duration: "4 months" },
      ],
    };
    res.end(JSON.stringify(courses));
  } else if (req.url === "/contact") {
    let contact = {
      email: "support@wescube.com",
      phone: "+91 9876543210",
      address: "Wescube HQ, India",
    };
    res.end(JSON.stringify(contact));
  } else if (req.url === "/services") {
    let services = {
      services: [
        "Web Development",
        "App Development",
        "SEO Optimization",
        "Cloud Solutions",
      ],
    };
    res.end(JSON.stringify(services));
  } 
  else if (req.url === "/team") {
    let team = {
      team: [
        { name: "John Doe", role: "CEO" },
        { name: "Jane Smith", role: "CTO" },
        { name: "Alice Johnson", role: "Lead Developer" },
      ],
    };
    res.end(JSON.stringify(team));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
