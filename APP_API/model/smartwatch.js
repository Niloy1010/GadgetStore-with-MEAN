
var mongoose = require('mongoose');

var smartplatformSchema = new mongoose.Schema({
    os: {type: String},
    gpu: {type: String}

})
var smartwatchSchema = new mongoose.Schema({
    gadget: {type: String},
    name: {type: String, require: true},
    displaysize:{type: String, require: true},
    bandsize:{type: String, require: true},
    bandcolor:{type: String, require: true},
    price:{type: String, require: true},
    img:{type: String},
    smartplatform: smartplatformSchema



})

mongoose.model('Smart', smartwatchSchema,"smartwatchDB");


