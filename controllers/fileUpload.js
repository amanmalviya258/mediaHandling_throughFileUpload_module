const File = require("../models/File");
const cloudinary = require("cloudinary").v2;
// local file ka handler bnana hai
exports.localFileUpload = (req, res) => {
  console.log(__dirname);
  try {
    //fetch the file
    const file = req.files.file;
    console.log("FILE AA GYI -->", file);

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("PATH", path);

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: "true",
      message: "Local file uploaded successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.log(error);
  }
};

//image upload ka handler
// exports.imageUpload = async (req, res) => {
//   try {
//     // data fetch
//     const { name, email, tags } = req.body;
//     console.log(name, email, tags);

//     const file = req.files.imageFile;

//     // validations

//     const supportedTypes = ["png", "jpeg", "jpg"];
//     const fileType = file.name.split(".")[1].toLowerCase();
//   } catch (error) {}
// };
