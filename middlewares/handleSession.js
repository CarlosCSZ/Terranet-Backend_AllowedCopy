const { handleHttpError } = require('../utils/handleErrors');
const { verifyToken } = require('../utils/handleJwt');
const { usersModel } = require('../models');


const authMiddleware = async (req, res, next) => {
    try {
        const tokenArray = req.headers.authorization.split(' ');
        if(tokenArray.length === 1){
            handleHttpError(res, 'Por favor, inicie sesión', 401);
            return
        };

        const token = tokenArray.pop();
        const checkToken = await verifyToken(token);

        if (checkToken === null){
            handleHttpError(res, 'Error del ID del token', 401);
            return
        };

        const user = await usersModel.findById(checkToken._id);
        req.user = user; 
        next()

    }catch(e) {
        handleHttpError(res, 'algo ocurrió con la sesión', 401);
    }
};


module.exports = authMiddleware