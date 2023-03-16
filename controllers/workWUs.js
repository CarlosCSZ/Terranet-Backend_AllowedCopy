const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { workWithUsModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');


const getItems = async (req,res) => {
  try {
    const data = await workWithUsModel.find({});
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing applicants');
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await workWithUsModel.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding applicant');
  }
};

const createItem = async (req,res) => {
  try {
    const body = matchedData(req);
    const data = await workWithUsModel.create(body);
    const vessel = await emailsModel('applicants', data);
    await sendEmail(vessel, body);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error creating applicant');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await workWithUsModel.findByIdAndUpdate(id, body);
    const dataUD = await workWithUsModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating profile');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await workWithUsModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting profile');
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
