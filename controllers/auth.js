const { matchedData } = require('express-validator');
const { tokenSign } = require('../utils/handleJwt');
const { usersModel } = require('../models');
const { encrypt, compare } = require('../utils/handlePassword');
const { handleHttpError } = require('../utils/handleErrors');


const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password);
    const body = {...req, password:passwordHash};
    console.log(body);
    const user = await usersModel.create(body);
    user.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user: user
    }

    res.send({ data });
  }catch(e) {
    console.error(e);
    handleHttpError(res, 'Error registrandose');
  }
};


const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email }).select('password');
    const userData = await usersModel.findOne({ email: req.email });
    if(!user){
      handleHttpError(res, 'El usuario que intenta acceder no existe', 404);
      return
    };

    const hashPassword = user.password; //user.get('password');
    const check = await compare(req.password, hashPassword);
    if(!check){
      handleHttpError(res, 'La contraseña es invalida', 401);
      return
    }
    user.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      id: user.id,
      user: userData.name,
      role: userData.role,
    }

    res.send({ data });
  }catch(e) {
    return null
  }
};



module.exports = { registerCtrl, loginCtrl }
