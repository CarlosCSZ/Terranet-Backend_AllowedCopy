const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleErrors');
const { businessPlanModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req, res) => {
  try {
    const data = await businessPlanModel.find({});
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Items not found')
  }
};

const getItem = async (req, res) => {
  try{
    const requ = matchedData(req);
    const { id } = requ;
    const data = await businessPlanModel.findById(id);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Item not found')
  }
};

const createItem = async (req, res) => {
  try{
    const body = matchedData(req);
    const data = await businessPlanModel.create(body);
    const vessel = await emailsModel('business', data);
    await sendEmail(vessel);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Error creating item')
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await businessPlanModel.findByIdAndUpdate(id, body);
    const dataUD = await businessPlanModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    console.error(e);
    handleHttpError(res, 'Error updating item')
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await businessPlanModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting item')
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
