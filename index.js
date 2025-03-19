let express = require("express");
require("dotenv").config();
let enquiryModel = require('./models/enquiry.model');
const { default: mongoose } = require("mongoose");
let app = express();
let PORT = 8000;
app.use(express.json());

mongoose.connect(process.env.DBURL).then(() => {
  console.log("connected to mongoDB");
});


app.post('/api/enquiry-insert' , (req , res) => {

    let enquiry = new enquiryModel({
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    });

    enquiry.save().then(()=>{
        res.send({status: 1, msg: 'enquiry saved successfully'})
        console.log('Data Saved');
    }).catch((err)=>{
        res.send({status:0, msg: 'Error while saving query', err})
        console.log(err)
    })
})


app.get("/api/enquiry-list", async(req, res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json({ status: 0, message: "Enquiry list", data: enquiryList });
});


app.delete("/api/enquiry-delete/:id", async(req, res)=> {
    let enquiryId = req.params.id;
    let deletedEnquiry = await enquiryModel.deleteOne({_id: enquiryId})
    console.log("enquiryId", enquiryId);
    res.status(200).json({ status: 1, message: "Enquiry item deleted", id: enquiryId, delRes: deletedEnquiry });
})



app.put("/api/enquire-update/:id", async (req, res) => {
  try {
    let enquireId = req.params.id;
    let { name, email, phone, message } = req.body;

    let updateObj = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };
    let updateRes = await enquiryModel.updateOne({ _id: enquireId }, updateObj);
    res.send({ status: 1, message: "Enquiry updated successfully", updateRes });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    res.status(500).send({ status: 0, message: "Server error", error });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


