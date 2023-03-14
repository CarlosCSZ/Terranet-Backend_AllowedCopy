const mongoose = require("mongoose");

const capacitySchema = new mongoose.Schema(
    {
        url:{
            type: String,
        },
        filename:{
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("capacity", capacitySchema)