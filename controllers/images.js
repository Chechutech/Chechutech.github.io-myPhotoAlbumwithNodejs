"use strict";

// const users = require("../models/users");
const Image = require("../models/images");

function testController(req, res) {
  res.status(200).send({
    message: "tryng controller",
  });
}

function uploadImages(req, res) {
  const image = new Image();
  const userId = req.params.id;
  let file_name = "You havent upload..";

  if (req.files) {
    let file_path = req.files.image.path;
    let file_split = file_path.split("\\");
    file_name = file_split[2];
    image.file = file_name;
    image.user = userId;

    //extension

    let ext_split = file_name.split(".");
    let file_ext = ext_split[1];

    //validation

    if (file_ext == "png" || file_ext == "jpg" || file_ext == "gif") {
      image.save((err, imageStored) => {
        if (err) {
          res.status(500).send({ message: "Error saving image" });
        } else {
          if (!imageStored) {
            res.status(404).send({ message: "Couldnt register image" });
          } else {
            res.status(200).send({ image: imageStored });
          }
        }
      });
    } else {
      res.status(200).send({ message: "File extension not valid" });
    }

    //console.log(file_path);
  } else {
    res.status(404).send({ message: "You havent upload any image" });
  }
}

function getImgUser(req, res) {
  const idUser = req.params.id;
  Image.find({ usuari: idUser }, (err, imgUser) => {
    //console.log(imgUser); 
    if (err) {
      res.status(500).send({ message: "Error" });
    } else {
      if (!imgUser) {
        res.status(404).send({ message: "No images found for this user" });
      } else if (imgUser == "") {
        res.status(404).send({ message: "User not valid" });
      } else {
       res.status(200).send({ images: imgUser }); 
      }
    }
  });
}

module.exports = { uploadImages, testController, getImgUser};
