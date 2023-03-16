const mongoose = require('mongoose');

const updateDataSchema = new mongoose.Schema(
  {
    previousData:{
      id:{
        type: String,
      },
      names:{
        type: String,
      },
      phoneNumber:{
        type: String,
      },
      email:{
        type: String,
      },
      address:{
        type: String,
      },
    },
    newData:{
      id:{
        type: String,
      },
      names:{
        type: String,
      },
      phoneNumber:{
        type: String,
      },
      email:{
        type: String,
      },
      address:{
        type: String,
      },
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("updateData", updateDataSchema);
