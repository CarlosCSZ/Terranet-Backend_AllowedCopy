const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { homeTransferReqModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req,res) => {
    try {
        const data = await homeTransferReqModel.find({});
        res.send({data})
    }catch(e) {
        handleHttpError(res, 'Error showing items',);
    } 
};

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const { id } = req;
        const data = await homeTransferReqModel.findById(id);
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error finding item',);
    }
};

const createItem = async (req,res) => {
    try {
        const body = matchedData(req);
        const data = await homeTransferReqModel.create(body);
        const vessel = await emailsModel('homeTrans', data);
        await sendEmail(vessel);
        res.send({ data }); 
    }catch (e) {
        console.error(e);
        handleHttpError(res, 'Error creating a request',);
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await homeTransferReqModel.findByIdAndUpdate(id, body);
        const dataUD = await homeTransferReqModel.findById(id); 
        res.send({ data, dataUD });
    }catch (e) {
        handleHttpError(res, 'Error updating request')
    }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await homeTransferReqModel.deleteOne({_id:id});
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error deleting item',);
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }