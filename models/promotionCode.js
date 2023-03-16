const mongoose = require('mongoose');

const promotionCodeSchema = new mongoose.Schema(
  {
    promotionCode:{
      type: String,
    },
    discountPercentage:{
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("promotionCode", promotionCodeSchema);
