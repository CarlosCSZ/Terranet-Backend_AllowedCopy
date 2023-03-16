const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema(
  {
    phoneNumber:{
      type: String,
      unique: false,
      index: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("phoneNumbers", phoneNumberSchema);
