
var mongoose = require('mongoose');

var platformSchema = new mongoose.Schema({
    os: {type: String},
    chipset: {type: String},
    gpu: {type: String}

})
var specificationSchema = new mongoose.Schema({
    gadget: {type: String},
    name: {type: String, require: true},
    cpu:{type: String, require: true},
    internalMemory:{type: String, require: true},
    camera:{type: String, require: true},
    price:{type: String, require: true},
    img:{type: String},
    platform: platformSchema



})




mongoose.model('Specs', specificationSchema,"specsDB");


