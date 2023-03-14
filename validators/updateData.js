const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('previousData').exists().notEmpty(),
  check('previousData.id').exists().notEmpty().isLength(10),
  check('previousData.names').exists().notEmpty(),
  check('previousData.phoneNumber').exists().notEmpty(),
  check('previousData.email').exists().notEmpty(),
  check('previousData.address').exists().notEmpty(),
  check('newData').exists().notEmpty(),
  check('newData.id').exists().notEmpty().isLength(10),
  check('newData.names').exists().notEmpty(),
  check('newData.phoneNumber').exists().notEmpty(),
  check('newData.email').exists().notEmpty(),
  check('newData.address').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorGet = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorUpdate = [
  check('id').exists().notEmpty().isMongoId(),
  check('previousData').exists(),
  check('previousData.id').exists().isLength(10),
  check('previousData.names').exists(),
  check('previousData.phoneNumber').exists(),
  check('previousData.email').exists(),
  check('previousData.address').exists(),
  check('newData').exists(),
  check('newData.id').exists().isLength(10),
  check('newData.names').exists(),
  check('newData.phoneNumber').exists(),
  check('newData.email').exists(),
  check('newData.address').exists(),
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