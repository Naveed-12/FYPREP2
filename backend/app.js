const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect('mongodb://localhost:27017/propertyticket').then(()=>{
    console.log("Connection Succesful");
}).catch((err)=>{
    console.log(err);
})
const app = express();
app.use(express.json())
app.use(cors());
app.use('/api/users',userRoutes);


app.listen(process.env.PORT,()=>{
    console.log("Backend Server is Running on Port",process.env.PORT);
})