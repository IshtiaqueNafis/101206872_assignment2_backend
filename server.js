const express = require('express');
const dotenv = require('dotenv');

//route files
const employees = require('./routes/employees')

//load config

dotenv.config({path: './config/config.env'});



const app = express();

//mount routes

app.use('/employees', employees )




const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));