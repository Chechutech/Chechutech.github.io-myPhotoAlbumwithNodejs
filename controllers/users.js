"use strict";

// const users = require("../models/users");
const Users = require("../models/users");

function testController(req, res) {
  res.status(200).send({
    message: "tryng controller",
  });
}

function saveUsers(req, res) {
  const users = new Users();
  const params = req.body;

  users.name = params.name;
  users.lastname = params.lastname;
  users.email = params.email;
  users.password = params.password;

  console.log(params);

  if (
    users.name != null &&
    users.lastname != null &&
    users.email != null &&
    users.password != null
  ) {
    users.save((err, usersStored) => {
      if (err) {
        res.status(403).send({ message: "Error al guardar l'usuari" });
      } else {
        if (!usersStored) {
          res.status(500).send({ message: "No s'ha registrat l'usuari" });
        } else {
          res.status(200).send({ usuario: usersStored });
        }
      }
    });
  }
}

function findUsers(req, res) {
  const params = req.body;
  const email = params.email;
  Users.findOne({ email: email.toLowerCase() }, (err, userFound) => {
    if (err) {
      res.status(500).send({ message: "Error" });
    } else {
      if (!userFound) {
        res.status(404).send({ message: "Incorrect credential" });
      } else {
        res.status(200).send({ userFound });
      }
    }
  });
}

function findAllUsers(req, res) {
  Users.find((err, userFound) => {
    if (err) {
      res.status(500).send({ message: "Error" });
    } else {
      if (!userFound) {
        res.status(400).send({ message: "Incorrect credential" });
      } else {
        res.status(200).send({ user: userFound });
      }
    }
  });
}

function updateUsers(req, res) {
  const userId = req.params.id;
  const update = req.body;

  Users.findByIdAndUpdate(userId, update, (err, updateUser) => {
    if (err) {
      res.status(500).send({ message: "Error while update your user" });
    } else {
      if (!updateUser) {
        res.status(404).send({ message: "We cant update user" });
      } else {
        res.status(200).send({ user: updateUser });
      }
    }
  });
}

function deleteUsers(req, res) {
  const userId = req.params.id;
  

  Users.findByIdAndDelete(userId, (err, deletedUser) => {
    if (err) {
      res.status(500).send({ message: "Error:cant update user" });
    } else {
      if (!deletedUser) {
        res.status(404).send({ message: "We couldn't delete user" });
      } else {
        res.status(200).send({ User: deletedUser });
      }
    }
  });
}


// function uploadImages(req,res){
//   const userId = req.params.id;
//   const file_name = "You havent upload..";
//   if(req.files){
//     const file_path = req.files.image.path;
//     console.log(file_path);
//   } else {
//     res.status(404).send({message: "You havent upload any image"});
//     }
// }


module.exports = {
  testController,
  saveUsers,
  findUsers,
  findAllUsers,
  updateUsers,
  deleteUsers,
  
};
