const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleErrors');
const { phoneNumberModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req, res) => {
  try {
    const data = await phoneNumberModel.find({});
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Items not found');
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await phoneNumberModel.findById(id);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Item not found');
  }
};

const createItem = async (req, res) => {
  try{
    const body = matchedData(req);
    const data = await phoneNumberModel.create(body);
    const vessel = await emailsModel('contactUs', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Error creating item');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await phoneNumberModel.findByIdAndUpdate(id, body);
    const dataUD = await phoneNumberModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating item');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await phoneNumberModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
      handleHttpError(res, 'Error deleting item');
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
