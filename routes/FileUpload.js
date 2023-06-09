const express = require("express");
const router = express.Router();

//handler leke aate h controller se
const { localFileUpload}  = require("../controllers/fileUpload");

//api route
router.post("/localfileUpload", localFileUpload);

router.post("/imageUpload",imageUpload );
router.post("/videoUpload",videoUpload );
router.post("/imageSizeReducer", imageSizeReducer);

router.post("/videoSizeReducer", imageSizeReducer);


module.exports = router;
