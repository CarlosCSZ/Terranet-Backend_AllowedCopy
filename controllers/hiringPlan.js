const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleErrors');
const { hiringPlanModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req, res) => {
  try {
    const data = await hiringPlanModel.find({});
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Items not found');
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await hiringPlanModel.findById(id);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Item not found');
  }
};

const createItem = async (req, res) => {
  try{
    const body = matchedData(req);
    const data = await hiringPlanModel.create(body);
    const vessel = await emailsModel('contracts', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Error creating item');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    console.log(id, body)
    const data = await hiringPlanModel.findByIdAndUpdate(id, body);
    const dataUD = await hiringPlanModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating item');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await hiringPlanModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting item');
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
