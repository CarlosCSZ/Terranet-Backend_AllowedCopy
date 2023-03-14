const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('idUser').exists().notEmpty().isLength(10),
  check('address1').exists().notEmpty(),
  check('address2').exists().notEmpty(),
  check('reference').exists().notEmpty(),
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
  check('idUser').exists().isLength(10),
  check('address1').exists(),
  check('address2').exists(),
  check('reference').exists(),
  check('gpsLocation').exists(),
  check('gpsLocation.latitude').exists(),
  check('gpsLocation.longitude').exists(),
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