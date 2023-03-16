const { heroModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors');
const { matchedData } = require('express-validator');
const awsUpload = require('../utils/awsImages');
const getImages = require('../utils/handlerImages');


const getItems = async (req,res) => {
  try {
    const raw = await heroModel.find({});
    const data = [{ "url": await getImages(raw) }];
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing files',);
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = matchedData(req);
    const data = await heroModel.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding file',);
  }
};

const createItem = async (req,res) => {
  try {
    const doc = await heroModel.find({});
    if(doc[0] !== undefined ){
      const id = doc[0]._id;
      const check = await heroModel.deleteOne(id);
      console.log(check);
    };
    const { file } = req;
    const result = await awsUpload(file);
    const fileData = {
      url: result.Location,
      filename: result.Key.split("/").pop(),
    };
    const data =  await heroModel.create(fileData);
    console.log('File successfully uploaded');
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error uploading file',);
  }
};

const updateItem = (req, res) => {
  console.log("No hay instrucciones");
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await heroModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    console.log('flag de delete', e);
    handleHttpError(res, 'Error deleting file',);
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
