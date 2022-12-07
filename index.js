"use strict";
const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;


mongoose.connect("mongodb://localhost:27017/myalbum", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Database connection established");
    app.listen(port, () => {
        console.log(`Server running at: port ${port}`);
      });
    
  }
});





