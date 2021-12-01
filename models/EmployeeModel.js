const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please add first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please add last name']
    },
    email: {
        type: String,
        required: [true, 'Please add email']
    },
    gender: {
        type: String,
        required: [true, 'Please select a gender']
    },
    Phone: {
        type: String,
        required: [true, 'Please enter phone number']
    },

    department: {
        type: String,
        required: [true, 'Please select the department']
    },

    address: {
        type: String,
        required: [true, 'please enter  address']
    },
    photo: {
        type: String,
        default: 'https://robohash.org/estiurerepellendus.png?size=300x400&set=set1'
    }

});

module.exports = mongoose.model('Employees', EmployeeSchema);