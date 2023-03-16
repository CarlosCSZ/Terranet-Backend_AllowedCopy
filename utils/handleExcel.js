const XLSX = require('xlsx');

const readExcel = async (path) => {
  try{
    const workBook = XLSX.readFile(path);
    const workbookSheet = workBook.SheetNames.shift();
    const excelData = XLSX.utils.sheet_to_json(workBook.Sheets[workbookSheet]);
    const data = [];
    excelData.map( (client) => {
      data.push({
        ...client,
        paymentDone: false
      });
    });
    return data
  }catch(e){
    console.log('error reading excel', e);
  }
};

module.exports = readExcel;
