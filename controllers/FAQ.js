const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { FAQModel } = require('../models');

const getItems = async (req,res) => {
    try {
        const data = await FAQModel.find({});
        res.send({data})
    }catch(e) {
        handleHttpError(res, 'Error showing FAQs',);
    } 
};

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const { id } = req;
        const data = await FAQModel.findById(id);
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error finding FAQ',);
    }
};

const createItem = async (req,res) => {
    try {
        const body = matchedData(req);
        const data = await FAQModel.create(body);
        res.send({ data }); 
    }catch (e) {
        handleHttpError(res, 'Error creating FAQ',);
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await FAQModel.findByIdAndUpdate(id, body);
        const dataUD = await FAQModel.findById(id); 
        res.send({ data, dataUD });
    }catch (e) {
        handleHttpError(res, 'Error updating FAQ')
    }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await FAQModel.deleteOne({_id:id});
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error deleting FAQ',);
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }