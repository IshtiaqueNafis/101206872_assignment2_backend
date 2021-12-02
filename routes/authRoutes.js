const express = require('express');
const {LoginUser, logOutUser} = require("../controllers/authController");
const router = express.Router();

router.route('/login').post(LoginUser);
router.route('/logout').get(logOutUser);


module.exports = router;