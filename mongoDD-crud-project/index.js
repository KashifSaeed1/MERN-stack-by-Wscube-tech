let express = require('express');
const { dbConnection } = require('./dbConnection');
let app = express();
app.use(express.json());

app.get("/student-read", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students"); 
    let data  = await studentCollection.find().toArray();
    const resObj = {
        status: 1,
        msg : 'student list',
        data
    }

    res.send(resObj);
});

app.post("/student-insert", async (req, res) => {
    try {
        let myDB = await dbConnection();
        let studentCollection = myDB.collection("students"); 

        let obj = {
            sName: req.body.sName,
            sEmail: req.body.sEmail,
        };

        // const [sName, sEmail] = req.body;
        // let obj = {sName, sEmail};
        console.log('Received Data:', obj);
        
        let result = await studentCollection.insertOne(obj);
        res.status(201).send({status:1, message: "Student inserted successfully", data: result });
    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).send("Error inserting student");
    }
});

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});



