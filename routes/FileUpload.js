const express = require("express");
const router = express.Router();

//handler leke aate h controller se
const { localFileUpload}  = require("../controllers/fileUpload");

//api route
router.post("/localfileUpload", localFileUpload);

module.exports = router;
