const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('url').exists(),
  check('name').exists(),
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
    check('url').exists(),
    check('name').exists(),
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