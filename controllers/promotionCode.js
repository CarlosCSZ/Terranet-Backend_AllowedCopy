const { matchedData } = require("express-validator");
const { handleHttpError } = require('../utils/handleErrors');
const { promotionCodeModel } = require('../models');

const getItems = async (req, res) => {
    try {
        const data = await promotionCodeModel.find({});
        res.send({ data });
    }catch (e){
        handleHttpError(res, 'Items not found')
    }
};

const getItem = async (req, res) => {
    try{
        requ = matchedData(req);
        const { id } = requ;
        const data = await promotionCodeModel.findById(id);
        res.send({ data });
    }catch (e){
        handleHttpError(res, 'Item not found')
    }
};

const createItem = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await promotionCodeModel.create(body);
        res.send({ data });
    }catch (e){
        handleHttpError(res, 'Error creating item')
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        console.log(id, body)
        const data = await promotionCodeModel.findByIdAndUpdate(id, body);
        const dataUD = await promotionCodeModel.findById(id); 
        res.send({ data, dataUD });
    }catch (e) {
        console.error(e)
        handleHttpError(res, 'Error updating item')
    }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await promotionCodeModel.deleteOne({_id:id});
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error deleting item')
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };