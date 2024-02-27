//express is node js frameowrk to help create node applications easily
const express = require("express");

//mongoose is the mongodb database
const mongoose = require("mongoose");

//for security so people dont see the url
const dotenv = require("dotenv");
dotenv.config();

//npm run dev when you are running nodemon

const app = express();

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  }).catch((err) => {
    console.log(err);
  });
  

const PORT = process.env.PORT || 3000;

//root directory
app.get("/", (req, res) => {
  res.send("Hello World");
});



