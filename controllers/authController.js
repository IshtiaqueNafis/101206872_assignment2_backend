const User = require('../models/UserModel')

exports.LoginUser = async (req, res, next) => {

    try {
        const {email, password} = req.body

        //validate and email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'invalid email or password'
            });
        }

        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'unauthorized access'
            });
        }

        //check if passwordmatches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'invalid email or password'
            });
        }
        sendResponse(user, 200, res);

    } catch (err) {

    }


}

//get token from model craate cookie and send response

const sendResponse = (user, statusCode, res) => {
    const token = user.getSignedJWTToken();

    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 1000),
        httpOnly: true,

    }

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token
    })
}