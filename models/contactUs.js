const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema(
  {
    idUser:{
      type: String,
    },
    name:{
      type: String,
    },
    phone:{
      type: String,
    },
    email:{
      type: String,
    },
    message:{
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("contactWithUs", contactUsSchema);
