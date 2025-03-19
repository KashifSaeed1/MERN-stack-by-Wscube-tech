const e = require('express');
let mongoose = require('mongoose')

let userEnquiryModel = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

let enquiryModel = mongoose.model('enquiry', userEnquiryModel);
module.exports = enquiryModel;