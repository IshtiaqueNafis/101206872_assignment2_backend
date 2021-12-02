const express = require('express');
const {LoginUser} = require("../controllers/authController");
const router = express.Router();

router.post('/login', LoginUser)

module.exports = router;