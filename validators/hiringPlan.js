const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('plan').exists().notEmpty(),
  check('ci').exists().notEmpty(),
  check('name').exists().notEmpty(),
  check('email').exists().notEmpty(),
  check('phone').exists().notEmpty().isLength(10),
  check('discountCode').exists(),
  check('address').exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorUpdate = [
  check('id').exists().notEmpty().isMongoId(),
  check('plan').exists().notEmpty(),
  check('ci').exists().notEmpty(),
  check('name').exists().notEmpty(),
  check('email').exists().notEmpty(),
  check('phone').exists().notEmpty().isLength(10),
  check('discountCode').exists(),
  check('address').exists().notEmpty(),
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

const validatorDelete = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreate, validatorUpdate, validatorGet, validatorDelete };