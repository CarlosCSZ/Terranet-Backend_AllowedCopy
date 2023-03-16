const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleErrors');
const { emailsStructure } = require('../models');

const getItems = async (req, res) => {
  try {
    const data = await emailsStructure.find({});
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Items not found')
  }
};

const getItem = async (req, res) => {
  try{
    const {id} = matchedData(req);
    const data = await emailsStructure.findById(id);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Item not found')
  }
};

const createItem = async (req, res) => {
  try{
    const body = matchedData(req);
    const data = await emailsStructure.create(body);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Error creating item')
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await emailsStructure.findByIdAndUpdate(id, body);
    const dataUD = await emailsStructure.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    handleHttpError(res, 'Error updating item')
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await emailsStructure.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting item')
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
