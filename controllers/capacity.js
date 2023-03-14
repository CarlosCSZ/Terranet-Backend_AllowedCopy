const { capacityModel } = require('../models');
const { handleHttpError } = require('../utils/handleErrors')
const awsUpload = require('../utils/awsImages');
const getImages = require('../utils/handlerImages');


const getItems = async (req,res) => {
    try {
        const raw = await capacityModel.find({});
        const data = [{ "url": await getImages(raw) }];
        res.send({data})
    }catch(e) {
        console.log(e, 'error controller');
        handleHttpError(res, 'Error showing files',);
    } 
};

const getItem = async (req, res) => {
    try{
        const { id } = req;
        const data = await capacityModel.findById(id);
        res.send({ data });
    }catch (e) {
        handleHttpError(res, 'Error finding file',);
    }
};

const createItem = async (req,res) => {
    try {
        const doc = await capacityModel.find({});
        if(doc[0] !== undefined ){
            const id = doc[0]._id;
            const check = await capacityModel.deleteOne(id);
            console.log(check);
        };
        const { file } = req;
        const result = await awsUpload(file);
        const fileData = {
            url: result.Location,
            filename: result.Key.split("/").pop(),
        };
        const data =  await capacityModel.create(fileData);
        console.log('File successfully uploaded'); 
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
        req = matchedData(req);
        const { id } = req;
        const data = await capacityModel.deleteOne({_id:id});
        res.send({ data });
    }catch (e) {
        console.log('flag de delete', e);
        handleHttpError(res, 'Error deleting file',);
    }
};;


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }