const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config({path: './config/config.env'});

const Employees = require('./models/EmployeeModel');
const User = require('./models/UserModel');

mongoose.connect(process.env.MONGO_URI,
    {
        useUnifiedTopology: true
    });

//read json file
const employeesData = (JSON.parse(fs.readFileSync(`${__dirname}/data/employee.json`, 'utf-8')));
const userData = (JSON.parse(fs.readFileSync(`${__dirname}/data/userData.json`, 'utf-8')));

//import into db
const importData = async () => {
    try {
        await Employees.create(employeesData);
        await User.create(userData);
        console.log('Data imported');
        process.exit();
    } catch (er) {
        console.log(er);
    }
}


const DeleteData = async () => {
    try {
        await Employees.deleteMany();

        console.log('Data deleted')
        process.exit();
    } catch (er) {
        console.log(er);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    DeleteData();
}