const mongoose = require('mongoose');
const  validator = require('validator');


const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true

    },
    lastName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: function (value){
            return validator.isEmail(value);
        }
    },
    password:{
        type: String,
        required: true,
        validate: function (value){
            return validator.isStrongPassword(value);
        }

    }
},{
    timestamps: true})


 const userModel =  mongoose.model("User", userSchema);
module.exports = userModel
