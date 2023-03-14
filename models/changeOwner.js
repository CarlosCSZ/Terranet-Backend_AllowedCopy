const mongoose = require('mongoose');

const changeHolderSchema = new mongoose.Schema(
    {
        previousOwner:{
            id:{
                type: String,
            },
            names:{
                type: String,
            },
            lastNames:{
                type: String,
            }
        },
        newOwner:{
            id:{
                type: String,
            },
            names:{
                type: String,
            },
            lastNames:{
                type: String,
            }
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("changeHolders", changeHolderSchema);