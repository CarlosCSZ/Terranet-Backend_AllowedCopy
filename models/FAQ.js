const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema(
    {
        question:{
            type: String,
        },
        answer:{
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("FAQ", FAQSchema)