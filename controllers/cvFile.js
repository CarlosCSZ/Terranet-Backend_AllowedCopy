const { cvFileModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors');
const awsUpload = require('../utils/awsCvFile');


const getItems = async (req,res) => {
  try {
    const data = await cvFileModel.find({});
    res.send({data})
  }catch(e) {
    handleHttpError(res, 'Error showing files',);
  }
};

const getItem = async (req, res) => {
  try{
    const { id } = req;
    const data = await cvFileModel.findById(id);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error finding file',);
  }
};

const createItem = async (req,res) => {
  try {
    const { file } = req;
    console.log('File successfully uploaded');
    const result = await awsUpload(file);
    const fileData = {
      url: result.Location,
      filename: result.Key.split("/").pop(),
    };
    const data =  await cvFileModel.create(fileData);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error uploading file',);
  }
};

const updateItem = () => {
  console.log("No hay instrucciones");
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req;
    const dataFile = await cvFileModel.deleteOne({_id:id});

    res.send({ dataFile });
  }catch (e) {
    handleHttpError(res, 'Error deleting file',);
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
