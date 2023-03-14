const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../excel`;
        cb (null, pathStorage)
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split(".").pop();
        const string = file.originalname.split(".").shift();
        const name = string.replace(/\s/g,"_");
        const fileName = `file-${Date.now().toString()}-${name}.${ext}`;
        cb (null, fileName);      
    }
});

const uploadMiddleware = multer({ storage });


module.exports = uploadMiddleware 