// cookies and session

const mongoose = require("mongoose");
const session=require('express-session');
const passport=require('passport');
const passportLocalMongoose=require('passport-local-mongoose');


mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({ email: String, password: String });
const User = new mongoose.model("User", userSchema);

module.exports.register = register;
function register(user_object, res) {
    
}

module.exports.login = login;
function login(user_object, res) {
    
}
