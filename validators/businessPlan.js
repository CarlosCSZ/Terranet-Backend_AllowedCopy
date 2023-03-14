const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators');

const validatorCreate = [
  check('ruc').exists().notEmpty().isLength(13),
  check('name').exists().notEmpty(),
  check('email').exists().notEmpty(),
  check('phone').exists().notEmpty().isLength(10),
  check('devices').exists().notEmpty(),
  check('devices.computers').exists().default(0),
  check('devices.tabletsPhones').exists().default(0),
  check('devices.smartTv').exists().default(0),
  check('devices.otherDevices').exists().default(0),
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
  check('ruc').exists().isLength(13),
  check('name').exists(),
  check('email').exists(),
  check('phone').exists().isLength(10),
  check('devices').exists(),
  check('devices.computers').exists().default(0),
  check('devices.tabletsPhones').exists().default(0),
  check('devices.smartTv').exists().default(0),
  check('devices.otherDevices').exists().default(0),
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