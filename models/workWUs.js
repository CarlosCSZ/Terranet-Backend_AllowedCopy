const mongoose = require('mongoose');

const workWUsSchema = new mongoose.Schema(
  {
    name:{
      type: String,
    },
    lastName:{
      type: String,
    },
    id:{
      type: String,
    },
    address:{
      type: String,
    },
    email:{
      type: String,
    },
    phone:{
      type: String,
    },
    vacant:{
      type: String,
    },
    url:{
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("worWithUs", workWUsSchema);
