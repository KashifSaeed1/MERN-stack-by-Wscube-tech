
const express = require("express");
const { dbConnection } = require("./dbConnection");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.end("home page is calling");
});


app.get("/student-read", async(req, res) => {
    let myDB = await dbConnection(); 
    let studentCollection = myDB.collection("students");
    let data = await studentCollection.find().toArray();

    let resObj = {
      status: 1,
      msg: "Data insert",
      data,
    };
     res.send(resObj);
});


app.post("/student-insert", async (req, res) => {
  try {
    let myDB = await dbConnection(); 
    let studentCollection = myDB.collection("students");

    // const obj = {
    //   Name: req.body.Name,
    //   Email: req.body.Email,
    // };

    const {Name, Email} = req.body;
    const obj = {Name, Email}

    let insertRes = await studentCollection.insertOne(obj)
    let resObj = {
      status: 1,
      msg: "Data insert",
      insertRes,
    };
    console.log('obj ====>', obj)
    res.send(resObj);

  } catch (error) {
    res.status(500).send("Database connection error");
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

