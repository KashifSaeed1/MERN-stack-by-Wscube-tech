
const express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");


const app = express();
const PORT = 3000;
app.use(express.json());

// GET Api
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

// POST Api
app.post("/student-insert", async (req, res) => {
  try {
    let myDB = await dbConnection(); 
    let studentCollection = myDB.collection("students");
   
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

// PUT or UPDATE Api
app.put("/student-update/:id", async (req, res) => {
        let { id } = req.params;

        console.log("update id", id);

        let myDB = await dbConnection();
        let studentCollection = myDB.collection("students");

        let { Name, Email } = req.body;
        if (!Name || !Email) {
            return res.status(400).json({ status: 0, msg: "Missing required fields" });
        }
        let UpdateRes = await studentCollection.updateOne({ _id: new ObjectId(id) },{ $set: { Name, Email } });
        let resObj = {
            status: 1,
            msg: "Data updated",
            UpdateRes,
        };
        res.send(resObj);
});

// DELETE Api
app.delete('/student-delete/:id', async(req, res) => {
        let {id} = req.params;
        console.log('delete id' , id)
        let myDB = await dbConnection();
        let studentCollection = myDB.collection('students')
        let delRes = await studentCollection.deleteOne({_id:new ObjectId(id)})

        let resObj = {
            status:1,
            msg: 'Data delete',
            delRes,
        }
        res.send(resObj);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

