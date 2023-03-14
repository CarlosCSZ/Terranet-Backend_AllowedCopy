const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('names').exists().notEmpty(),
  check('lastNames').exists().notEmpty(),
  check('ci').exists().notEmpty().isLength(10),
  check('cutOffDate').exists().notEmpty(),
  check('value').exists().notEmpty(),
  check('paymentDone').exists().default(false),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGet = [
  check('ci').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorUpdate = [
  check('id').exists().notEmpty().isMongoId(),  
  check('paymentDone').exists(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorDelete = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreate, validatorGet, validatorUpdate, validatorDelete };