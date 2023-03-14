const { paymentControlModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors');
const readExcel = require ('../utils/handleExcel');
const deleteFile = require('../utils/deleteFile');


const getItems = async (req,res) => {
    // try {
    //     const data = await paymentControlModel.find({});
    //     res.send({data})
    // }catch(e) {
    //     handleHttpError(res, 'Error showing data',);
    // } 
};

const getItem = async (req, res) => {
    // try{
    //     const { body } = req;
    //     const id = body.ci;
    //     const data = await paymentControlModel.find({ci: id});
    //     res.send({ data });
    // }catch (e) {
    //     handleHttpError(res, 'Error finding data',);
    // }
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
    // try {
    //     const { file } = req;
    //     const path = file.path;
    //     const excelData = await readExcel(path);
    //     console.log('File successfully read');
    //     for (let i=0; i<excelData.length; i++){
    //         const ci = excelData[i].ci;
    //         // const compare = await paymentControlModel.findOne(ci)
    //         // if (!compare){
    //         //     const data = excelData[i];
    //         //     const updatedData = await paymentControlModel.create(data);
    //         // }else{
    //         //     const data = excelData[i];
    //         //     const updatedData = await paymentControlModel.findOneAndUpdate(data)
    //         // }
    //         // return updatedData;
    //         console.log(ci);
    //         // console.log(compare);
    //     }
    //     // const data =  await paymentControlModel.create(excelData);
    //     await deleteFile(path); 
    //     res.send({ updatedData });
    // }catch (e) {
    //     handleHttpError(res, 'Error updating dataBase',);
    // }
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