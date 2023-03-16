const mongoose = require('mongoose');

const jobVacsSchema = new mongoose.Schema(
  {
    jobVacancy:{
      type: String,
    },
    jobDescription:{
      type: String,
    },
    jobRequirements:{
      type: Array,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("jobVacancies", jobVacsSchema);
