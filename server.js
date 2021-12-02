const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db');
//route files
const employees = require('./routes/employees');
const login = require('./routes/authRoutes');
//load config
dotenv.config({path: './config/config.env'});

//connect to database
connectDB();


const app = express();

//bodyparser

app.use(express.json());
app.use(cookieParser())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


//mount routes

app.use('/employees', employees)
app.use('/employees', login)


const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handle unhandled rejections

process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`);
    //close server
    server.close(() => process.exit(1));
})