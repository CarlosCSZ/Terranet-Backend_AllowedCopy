const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleErrors');
const { footerLinksModel } = require('../models');

const getItems = async (req, res) => {
  try {
    const data = await footerLinksModel.find({});
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Items not found')
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await footerLinksModel.findById(id);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Item not found')
  }
};

const createItem = async (req, res) => {
  try{
    const body = matchedData(req);
    const data = await footerLinksModel.create(body);
    res.send({ data });
  }catch (e){
    handleHttpError(res, 'Error creating item')
  }
};

const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await footerLinksModel.findByIdAndUpdate(id, body);
    const dataUD = await footerLinksModel.findById(id);
    res.send({ data, dataUD });
  }catch (e) {
    console.error(e);
    handleHttpError(res, 'Error updating item')
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await footerLinksModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting item')
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
