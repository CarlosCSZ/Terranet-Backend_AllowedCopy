const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { changeOwnerModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req,res) => {
  try {
    const data = await changeOwnerModel.find({});
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing changes processes',);
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await changeOwnerModel.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding this changes of ownership',);
  }
};

const createItem = async (req,res) => {
  try {
    const body = matchedData(req);
    const data = await changeOwnerModel.create(body);
    const vessel = await emailsModel('changeOwner', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error creating this request',);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await changeOwnerModel.findByIdAndUpdate(id, body);
    const dataUD = await changeOwnerModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating')
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await changeOwnerModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting this proccess',);
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
