const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { recommendationsModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req,res) => {
  try {
    const data = await recommendationsModel.find({});
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing recommendations');
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await recommendationsModel.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding recommendation');
  }
};

const createItem = async (req,res) => {
  try {
    const body = matchedData(req);
    const data = await recommendationsModel.create(body);
    const vessel = await emailsModel('recommendations', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error creating a recommendation');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await recommendationsModel.findByIdAndUpdate(id, body);
    const dataUD = await recommendationsModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating item');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await recommendationsModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting item');
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
