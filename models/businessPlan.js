const mongoose = require('mongoose');

const businessPlanSchema = new mongoose.Schema(
  {
    ruc:{
      type: String,
    },
    name:{
      type: String,
    },
    email:{
      type: String,
    },
    phone:{
      type: String,
    },
    devices:{
      computers:{
        type: Number,
      },
      tabletsPhones:{
        type: Number,
      },
      smartTv:{
        type: Number,
      },
      otherDevices:{
        type: Number,
      }
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("businessPlan", businessPlanSchema);
