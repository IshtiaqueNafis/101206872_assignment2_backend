const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password']

    },
    role: {
        type: String,
        enum: ['Admin'],
        default: 'Admin'
    }


});

//encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.getSignedJWTToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
},
    //Match user EneterPassword
    UserSchema.methods.matchPassword = async function (enteredpassword) {
        return await bcrypt.compare(enteredpassword, this.password)
    }

module.exports = mongoose.model('User', UserSchema);