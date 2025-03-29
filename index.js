const express = require("express");
const dbConnection = require("./dbConnection"); 
const { ObjectId } = require("mongodb");
const app = express();
const PORT = 3005;
app.use(express.json());


app.get("/get-book", async (req, res) => {
  let myDB = await dbConnection(); 
  let studentCollection = myDB.collection("books");
  let data = await studentCollection.find().toArray();
    let resObj = {
          status: 1,
          msg: "Data insert",
          data,
        };
     res.send(resObj);
});

app.post("/insert-book", async (req, res) => {
  try {
    const { title, author, genre, publishedYear, copiesAvailable } = req.body;
    const newBook = { title, author, genre, publishedYear, copiesAvailable };
    const db = await dbConnection(); 
    const result = await db.collection("books").insertOne(newBook);
    
    res.send({
      status: 1,
      msg: "Book inserted successfully",
      insertedId: result.insertedId,
      book: newBook,
    });
  } catch (error) {
    console.error("Error inserting book:", error);
    res.status(500).send({ status: 0, msg: "Internal Server Error" });
  }
});

app.delete("/delete-book/:id" ,async(req, res)=>{
  try {
    let {id} = req.params;
    console.log('delete id' , id)
    const db = await dbConnection();
    const result = await db.collection("books").deleteOne({ _id: new ObjectId(id) });
    let resObj = {
      status: 1,
      msg: "id delete successfully",
      result,
    };
    res.send(resObj);
  } catch (error) {
    console.log('something went wrong', error)
    return null;
  }
})


app.put("/update-book/:id", async (req, res) => {
  try {
    const { title, author, genre, publishedYear, copiesAvailable } = req.body;
    const db = await dbConnection();
    let { id } = req.params;
    console.log("id:", id);

    const updateRes = await db
      .collection("books")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { title, author, genre, publishedYear, copiesAvailable } }
      );

      res.json({ status: 1, msg: "Data updated successfully", updateRes });
      } catch (error) {
        console.error("Something went wrong:", error);
        res
          .status(500)
          .json({ status: 0, msg: "Internal Server Error", error: error.message });
      }
    });


app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
