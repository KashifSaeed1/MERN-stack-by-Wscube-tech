const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    let enquiry = new enquiryModel({
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    });

    await enquiry.save();
    res.send({ status: 1, msg: "Enquiry saved successfully" });
    console.log("Data Saved.....");
  } catch (err) {
    console.error("Error while saving enquiry:", err);
    res.status(500).send({ status: 0, msg: "Error while saving enquiry", err });
  }
};

let enquiryList = async (req, res) => {
  try {
    let enquiryList = await enquiryModel.find();
    res
      .status(200)
      .json({ status: 1, message: "Enquiry list", data: enquiryList });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    res
      .status(500)
      .json({ status: 0, message: "Error fetching enquiries", error });
  }
};

let enquiryDelete = async (req, res) => {
  try {
    let enquiryId = req.params.id;
    let deletedEnquiry = await enquiryModel.deleteOne({ _id: enquiryId });

    console.log("Deleted Enquiry ID:", enquiryId);
    res.status(200).json({
      status: 1,
      message: "Enquiry item deleted",
      id: enquiryId,
      delRes: deletedEnquiry,
    });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res.status(500).json({ status: 0, message: "Server error", error });
  }
};


let enquiryUpdate = async (req, res) => {
  try {
    let enquireId = req.params.id;
    let { name, email, phone, message } = req.body;

    let updateObj = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    };

    let updateRes = await enquiryModel.updateOne(
      { _id: enquireId },
      { $set: updateObj }
    );

    res.send({ status: 1, message: "Enquiry updated successfully", updateRes });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    res.status(500).send({ status: 0, message: "Server error", error });
  }
};

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate };
