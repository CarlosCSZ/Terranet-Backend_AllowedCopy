const mongoose = require('mongoose');

const plansBoardSchema = new mongoose.Schema(
    {
        planName:{
            type: String,
            unique: true, 
        },
        price:{
            type: Number,
        },
        speed:{
            type: Number,
        } 
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("plansBoard", plansBoardSchema);