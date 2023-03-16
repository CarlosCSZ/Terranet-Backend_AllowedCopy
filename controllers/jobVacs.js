const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { jobVacancyModel } = require('../models');

const getItems = async (req,res) => {
  try {
    const data = await jobVacancyModel.find({});
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing job Vacancies');
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await jobVacancyModel.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding job Vacancy');
  }
};

const createItem = async (req,res) => {
  try {
    const body = matchedData(req);
    const data = await jobVacancyModel.create(body);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error creating job Vacancy');
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await jobVacancyModel.findByIdAndUpdate(id, body);
    const dataUD = await jobVacancyModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating job Vacancy');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await jobVacancyModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting job Vacancy');
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
