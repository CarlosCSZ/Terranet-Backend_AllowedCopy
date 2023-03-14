const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('previousOwner').exists().notEmpty(),
  check('previousOwner.id').exists().notEmpty().isLength(10),
  check('previousOwner.names').exists().notEmpty(),
  check('previousOwner.lastNames').exists().notEmpty(),
  check('newOwner').exists().notEmpty(),
  check('newOwner.id').exists().notEmpty().isLength(10),
  check('newOwner.names').exists().notEmpty(),
  check('newOwner.lastNames').exists().notEmpty(),
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
  check('previousOwner').exists(),
  check('previousOwner.id').exists().isLength(10),
  check('previousOwner.names').exists(),
  check('previousOwner.lastNames').exists(),
  check('newOwner').exists(),
  check('newOwner.id').exists().isLength(10),
  check('newOwner.names').exists(),
  check('newOwner.lastNames').exists(),
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