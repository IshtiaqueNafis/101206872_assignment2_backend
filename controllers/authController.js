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

        const token = user.getSignedJWTToken();
        res.status(200).json({
            success: true,
            token
        })

    } catch (err) {

    }


}