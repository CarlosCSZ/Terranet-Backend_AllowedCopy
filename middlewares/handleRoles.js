const { handleHttpError } = require('../utils/handleErrors');


const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolFromUser = user.role; // Se obtiene el rol del user

        const checkRoles = roles.some( (roleSingle) => rolFromUser.includes(roleSingle) );
        if(!checkRoles){
            handleHttpError(res, "usuario no permitido", 403);
            return
        }
        next(); 
    }catch(e) {
        handleHttpError(res, 'Permisos denegados', 403);
    }
}


module.exports = checkRol