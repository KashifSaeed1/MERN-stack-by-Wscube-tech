let express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const enquiryRoutes = require("./App/routes/enquiryRoute");
let app = express();
let PORT = 8000;
app.use(express.json());

mongoose.connect(process.env.DBURL).then(() => {
  console.log("connected to mongoDB");
});

app.use("/web/api/enquiry", enquiryRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
