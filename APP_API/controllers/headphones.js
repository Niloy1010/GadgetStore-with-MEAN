var mongoose = require('mongoose');
var Loc = mongoose.model("Heads");

var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}


module.exports.headphones = function(req,res) {
    Loc.find().exec(function(err,headphones){
        if(!headphones){
            sendJsonResponse(res,404,{
                message: "Not Found"
            })
        }
        else if (err){
            sendJsonResponse(res,404,err)
        }
        
        sendJsonResponse(res,200,headphones);
    })
    }


module.exports.headphonesCreate = function(req,res) {

    Loc.create({
        gadget: 'headphones',
        name:req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        noisecanceltype: req.body.noisecanceltype,
        img: req.body.img,
        category : {
            HeadPhonetype: req.body.category.type,
            style: req.body.category.style,
            connection: req.body.category.connection
        }

    },
    function(err,headphone) {
        if(err){
            sendJsonResponse(res,400,err);
        }
        else{
            sendJsonResponse(res,201,headphone);
        }
    }
    )

}
module.exports.headphonesReadOne = function(req,res) {
    
    if(req.params && req.params.specid) {
    Loc.findById(req.params.specid)
    .exec(function(err,headphone){
        if(!headphone){
        sendJsonResponse(res,404,{
            message: "Not Found"
        })
        return;
    }
    else if (err){
        sendJsonResponse(res,404,err);
        
        return;
    }
    
    sendJsonResponse(res,200,headphone);
})
    }
    else {
        sendJsonResponse(res,404,{
            message: "No headphone id Found"
        })
    }
}


module.exports.headphonesUpdateOne = function(req,res) {
    if(!req.params.specid) {
        sendJsonResponse(res,404,{
            "Message" : "Headphones id required"
        })
        return;
    }
    Loc.findById(req.params.specid).exec(function(err,headphone){
        if(!headphone) {
            sendJsonResponse(res,404,{

                "message": "headphone not found"
               
            })
            return;
        }
        else if(err) {
            sendJsonResponse(res,400,err);
            return;
        }
        console.log(headphone);
        headphone.name = req.body.name;
        headphone.brand = req.body.brand;
        headphone.price = req.body.price;
        headphone.noisecanceltype = req.body.noisecanceltype;
        headphone.img = req.body.img;
        headphone.category.type = req.body.category.type;
        headphone.category.style = req.body.category.style;
        headphone.category.connection = req.body.category.connection;
        headphone.save(function(err,headphone){
            if(err) {
                sendJsonResponse(res,400,err)
            }
            else{
                sendJsonResponse(res,200,headphone)
            }
        })
        
    })

}
module.exports.headphonesDeleteOne = function(req,res) {
    var specid = req.params.specid;
    if(specid) {
        Loc.findByIdAndRemove(specid)
        .exec(function(err,headphone){
            if(err) {
                sendJsonResponse(res,404,err);
                return;
            }
            else if(!headphone) {
                
                sendJsonResponse(res,404,{"message":"No id"});
                return;
            }
            sendJsonResponse(res,204,{"message":"Deleted"});
        })
    }
    else {
        sendJsonResponse(res,404,{
            "message":"No id"
        })
    }

}