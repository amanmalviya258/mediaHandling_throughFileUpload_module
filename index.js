//create application
const express = require("express");
const app = express();

//port find kro
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle ware add kro
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// db se connect
const db = require("./config/database");
db.connect();

//cloudinary se connect
const cloudinary = require("./config/cloudinary")
const clickhouse = require('clickhouse');

cloudinary.cloudinaryConnect();

//api route mount krna h
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
