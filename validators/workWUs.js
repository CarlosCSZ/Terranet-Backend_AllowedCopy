const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('name').exists().notEmpty(),
  check('lastName').exists().notEmpty(),
  check('id').exists().notEmpty().isLength(10),
  check('address').exists().notEmpty().isLength({max:70}),
  check('email').exists().notEmpty(),
  check('phone').exists().notEmpty().isLength(10),
  check('vacant').exists().notEmpty(),
  check('url').exists().notEmpty(),
  check('filename').exists().notEmpty(),
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
  check('name').exists(),
  check('lastName').exists(),
  check('id').exists(),
  check('address').exists(),
  check('email').exists(),
  check('phone').exists(),
  check('vacant').exists(),
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
