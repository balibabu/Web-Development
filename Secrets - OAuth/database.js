require("dotenv").config();
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption"); // for level 2 encryption
// const md5=require('md5') // for level 3 encryption
const bcrypt=require('bcrypt'); // for level 4 security
const saltround=10;

mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({ email: String, password: String });

// userSchema.plugin(encrypt, {
//     secret: process.env.SECRET,
//     encryptedFields: ["password"],
// }); // only encrypt password not email , for level 2

const User = new mongoose.model("User", userSchema);

module.exports.register = register;
function register(user_object, res) {
    bcrypt.hash(user_object.password,saltround,function(err,hash){
        const user1 = new User({
            email: user_object.username,
            password:hash           //md5(user_object.password), for level 3
        });
        user1.save(function (err) {
            if (err) console.log(err);
            else res.render("secrets");
        });
    });
}

module.exports.login = login;
function login(user_object, res) {
    // console.log(user_object);
    User.findOne({ email: user_object.username }, function (err, foundUser) {
        if (!err) {
            if (foundUser) {
                bcrypt.compare(user_object.password,foundUser.password,function(err,result){
                    if(result===true) res.render('secrets');
                    else res.send('you are not auth user')
                });
            } else {
                res.send("not found");
            }
        } else {
            res.send(err);
        }
    });
}
