const express = require("express");

const usersController = require("../controllers/users")
const imagesController = require("../controllers/images")
const api = express.Router();
const multipart = require("connect-multiparty");

//middleware
const mp_upload = multipart({ uploadDir: './uploads/users'});

//users routes

api.get("/all", usersController.testController);
api.post("/register", usersController.saveUsers);
api.post("/finduser", usersController.findUsers);
api.get("/findalluser", usersController.findAllUsers);
api.put("/update-user/:id", usersController.updateUsers);
api.delete("/deleted/:id", usersController.deleteUsers);
api.post("/upload-image-user/:id", [mp_upload], imagesController.uploadImages);
api.get("/upload-image/:id", [mp_upload],imagesController.getImgUser);

module.exports = api;
