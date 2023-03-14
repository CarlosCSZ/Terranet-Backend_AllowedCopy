const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('jobVacancy').exists().notEmpty(),
  check('jobDescription').exists().notEmpty(),
  check('jobRequirements').exists().notEmpty(),
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
  check('jobVacancy').exists(),
  check('jobDescription').exists(),
  check('jobRequirements').exists(),
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