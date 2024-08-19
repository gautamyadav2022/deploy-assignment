const mongoose = require('mongoose');
require('dotenv').config();  

const mongo_url = process.env.MONGO_CONN; 

mongoose.connect(mongo_url) 
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log("mongodb connection error", err);
  });
