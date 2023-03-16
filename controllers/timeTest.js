const { handleHttpError } = require('../utils/handleErrors');
const formatSizeUnits = require("../utils/bytesFormat");

const measureTime = async (req, res) => {
  try {
    const { start } = req;
    const { file } = req;
    const size = await formatSizeUnits(file.size);
    const time = (new Date() - start)/1000;
    const test = (size[0]/time).toFixed(3) + `${size[1]}/s`;
    const data = {
      type: file.mimetype,
      size: size[0] + size[1],
      time: time + " s",
      test,
    };
    res.send(data);
  } catch (error) {
    handleHttpError(res, "Something went wrong", 400);
  }
};

module.exports = measureTime
