
var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    type: {type: String}, //gaming, enterprise, music//
    style: {type: String}, //in ear, over the ear, on the ear//
    connection: {type: String} // wire, wireless

})
var headphonepecsSchema = new mongoose.Schema({
    gadget: {type: String},
    name: {type: String, require: true},
    brand:{type: String, require: true},
    price:{type: String, require: true},
    noisecanceltype:{type: String, require: true}, //active, passive, adaptive//
    img:{type: String},
    category: categorySchema



})




mongoose.model('Heads',headphonepecsSchema,"headphones");


