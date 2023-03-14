const mongoose = require('mongoose');

const emailsSchema = new mongoose.Schema(
    {
        email:{
            type: String,
        },
        subject:{
            type: String,
        } 
    },
    {
        timestamps: true,
        versionKey: false,
    },
    
);

module.exports = mongoose.model("emails", emailsSchema);