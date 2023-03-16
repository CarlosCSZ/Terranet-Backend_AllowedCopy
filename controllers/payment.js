const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { paymentControlModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req,res) => {
  try {
    const { size, page } = req.query;
    const limit = size || 10;
    const count = page || 1;
    const parameters = {
      page: count,
      limit: limit
    };
    const data = await paymentControlModel.paginate({}, parameters);

    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing data',);
  }
};

const getItem = async (req, res) => {
  try{
    const { ci } = matchedData(req);
    const data = await paymentControlModel.findOne({ci});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding data',);
  }
};

const createItem = async (req,res) => {
  try {
    const body = matchedData(req);
    const data = await paymentControlModel.create(body);
    const vessel = await emailsModel('pago', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error creating a data');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await paymentControlModel.findByIdAndUpdate(id, body);
    const dataUD = await paymentControlModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating data');
  }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await paymentControlModel.deleteOne({_id:id});
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error deleting data',);
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
