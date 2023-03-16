const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const paymentControlSchema = new mongoose.Schema(
  {
    names:{
      type: String,
    },
    lastNames:{
      type: String,
    },
    ci:{
      type: String,
      unique: true,
    },
    cutOffDate:{
      type: String,
    },
    value:{
      type: String,
    },
    paymentDone:{
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

paymentControlSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("payments", paymentControlSchema);
