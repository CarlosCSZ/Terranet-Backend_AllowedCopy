const mongoose = require('mongoose');

const recommendationsSchema = new mongoose.Schema(
  {
    names:{
      type: String,
    },
    lastNames:{
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

module.exports = mongoose.model("recommendations", recommendationsSchema);
