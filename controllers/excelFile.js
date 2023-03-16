const { paymentControlModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors');
const readExcel = require ('../utils/handleExcel');
const deleteFile = require('../utils/deleteFile');


const getItems = async (req,res) => {
  console.log("No hay instrucciones");
};

const getItem = async (req, res) => {
  console.log("No hay instrucciones");
};

const createItem = async (req, res) => {
  try {
    const { file } = req;
    const path = file.path;
    const excelData = await readExcel(path);
    console.log('File successfully read');
    await paymentControlModel.remove({});
    const data =  await paymentControlModel.create(excelData);
    await deleteFile(path);
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error reading file',);
  }
};

const updateItem = async (req, res) => {
  console.log("No hay instrucciones");
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await paymentControlModel.deleteOne({_id:id});
    res.send({ data });
  }catch (e) {
    handleHttpError(res, 'Error deleting item')
  }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
