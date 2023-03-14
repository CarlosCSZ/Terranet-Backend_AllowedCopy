const { handleHttpError } = require('../utils/handleErrors')
const { matchedData } = require('express-validator');
const { contactWithUsModel } = require('../models');
const emailsModel = require('../models/emailMessages');
const sendEmail = require('../utils/sendEmail');

const getItems = async (req,res) => {
    try {
        const data = await contactWithUsModel.find({});
        res.send({data})
    }catch(e) {
        handleHttpError(res, 'Error showing items',);
    } 
};

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const { id } = req;
        const data = await contactWithUsModel.findById(id);
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error finding item',);
    }
};

const createItem = async (req,res) => {
    try {
        const body = matchedData(req);
        const data = await contactWithUsModel.create(body);
        const vessel = await emailsModel('contactUs', data);
        await sendEmail(vessel);
        res.send({ data }); 
    }catch (e) {
        handleHttpError(res, 'Error creating a request',);
    }
};

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await contactWithUsModel.findByIdAndUpdate(id, body);
        const dataUD = await contactWithUsModel.findById(id); 
        res.send({ data, dataUD });
    }catch (e) {
        handleHttpError(res, 'Error updating item')
    }
};

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await contactWithUsModel.deleteOne({_id:id});
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error deleting item',);
    }
};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }