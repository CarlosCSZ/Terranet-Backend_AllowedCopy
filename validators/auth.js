const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');


const validatorRegister = [
    check("name").exists().notEmpty().isString().isLength({min: 6, max:20}),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 6, max:16}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 6, max:16}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]




module.exports = { validatorRegister, validatorLogin }