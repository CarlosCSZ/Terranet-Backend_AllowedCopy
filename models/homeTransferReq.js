const mongoose = require('mongoose');

const homeTransferReqSchema = new mongoose.Schema(
  {
    idUser:{
      type: String,
    },
    address1:{
      type: String,
    },
    address2:{
      type: String,
    },
    reference:{
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("homeTransferRequests", homeTransferReqSchema);
