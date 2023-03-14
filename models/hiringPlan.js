const mongoose = require('mongoose');

const hiringPlanSchema = new mongoose.Schema(
    {
        plan:{
            type: Object,
        },
        discountCode:{
            type: String,
        },
        ci:{
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
        address:{
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("hiringPlan", hiringPlanSchema);