const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    signupName:String,
    signupEmail:String,
    signupPassword:String
});

const userModel = new mongoose.model("users",userSchema);
module.exports = userModel;