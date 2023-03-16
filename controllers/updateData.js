const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { updateData } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req,res) => {
  try {
    const data = await updateData.find({});
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing changes processes');
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await updateData.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding this changes of ownership');
  }
};

const createItem = async (req,res) => {
  try {
    const body = matchedData(req);
    const data = await updateData.create(body);
    const vessel = await emailsModel('updateData', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error creating this request');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await updateData.findByIdAndUpdate(id, body);
    const dataUD = await updateData.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await updateData.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting this proccess');
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
