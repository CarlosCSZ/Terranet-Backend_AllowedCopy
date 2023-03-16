const fs = require('fs');

const deleteFile = async (path) => {
  try{
    fs.unlinkSync(path);
    console.log('file successfully deleted from server');
  }catch(e){
    console.log('failed deleting file');
    console.error('e', message);
  }
};

module.exports = deleteFile;
