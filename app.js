
const express = require("express");
const users_Routes = require("./routes/users");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api", users_Routes);


// const testFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve (true)
//         }, 3000)}
//     )
//     };


// app.use(async (req, res, next) => {
//     const responsePromise = await testFunction();
//     console.log("answer promise is", responsePromise);
//     next();

//   setTimeout(() => {
//     console.log("middleware 1");
//     testFunction();
//     next();
//   }, 2000);
 
// });

// app.use((req, res, next) => {
//   console.log("middleware 2");
//   next();
// });



module.exports = app;
