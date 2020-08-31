
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String},
    password: {type: String},
    fname: {type:String},
    lname: {type: String}
})

mongoose.model("Users",userSchema,"users");

