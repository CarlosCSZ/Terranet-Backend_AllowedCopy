const mongoose = require('mongoose');

const footerLinksSchema = new mongoose.Schema(
  {
    url:{
      type: String,
    },
    name:{
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("footerLinks", footerLinksSchema);
