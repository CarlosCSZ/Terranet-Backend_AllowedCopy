const express = require('express');
const router = express.Router();
const { validatorRegister } = require('../validators/auth');
const { registerCtrl } = require('../controllers/auth');


router.post("/", validatorRegister, registerCtrl);


module.exports = router