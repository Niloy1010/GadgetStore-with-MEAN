var mongoose = require('mongoose');
var Loc = mongoose.model("Smart");

var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}


module.exports.smartwatch = function(req,res) {
    Loc.find().exec(function(err,smartwatch){
        if(!smartwatch){
            sendJsonResponse(res,404,{
                message: "Not Found"
            })
        }
        else if (err){
            sendJsonResponse(res,404,err)
        }
        
        sendJsonResponse(res,200,smartwatch);
    })
    }


module.exports.smartwatchsCreate = function(req,res) {

    Loc.create({
        
        gadget: 'displaywatch',
        name:req.body.name,
        displaysize: req.body.displaysize,
        bandsize: req.body.bandsize,
        bandcolor: req.body.bandcolor,
        price: req.body.price,
        img: req.body.img,
        smartplatform : {
            os: req.body.smartplatform.os,
            gpu: req.body.smartplatform.gpu
        }

    },
    function(err,smartwatch) {
        if(err){
            sendJsonResponse(res,400,err);
        }
        else{
            sendJsonResponse(res,201,smartwatch);
        }
    }
    )

}
module.exports.smartwatchsReadOne = function(req,res) {
    
    if(req.params && req.params.smartwatchid) {
    Loc.findById(req.params.smartwatchid)
    .exec(function(err,smartwatch){
        if(!smartwatch){
        sendJsonResponse(res,404,{
            message: "Not Found"
        })
        return;
    }
    else if (err){
        sendJsonResponse(res,404,err);
        
        return;
    }
    
    sendJsonResponse(res,200,smartwatch);
})
    }
    else {
        sendJsonResponse(res,404,{
            message: "No smartwatch id Found"
        })
    }
}


module.exports.smartwatchsUpdateOne = function(req,res) {
    if(!req.params.smartwatchid) {
        sendJsonResponse(res,404,{
            "Message" : "Smartwatch id required"
        })
        return;
    }
    Loc.findById(req.params.smartwatchid).exec(function(err,smartwatch){
        if(!smartwatch) {
            sendJsonResponse(res,404,{

                "message": "smartwatch not found"
               
            })
            return;
        }
        else if(err) {
            sendJsonResponse(res,400,err);
            return;
        }
        console.log(smartwatch);
        smartwatch.name = req.body.name;
        smartwatch.displaysize = req.body.displaysize;
        smartwatch.bandcolor = req.body.bandcolor;
        smartwatch.bandsize = req.body.bandsize;
        smartwatch.img = req.body.img;
        smartwatch.price = req.body.price;
        smartwatch.smartplatform.os = req.body.smartplatform.os;
        smartwatch.smartplatform.gpu = req.body.smartplatform.gpu;
        smartwatch.save(function(err,smartwatch){
            if(err) {
                sendJsonResponse(res,400,err)
            }
            else{
                sendJsonResponse(res,200,smartwatch)
            }
        })
        
    })

}
module.exports.smartwatchesDeleteOne = function(req,res) {
    var smartwatchid = req.params.smartwatchid;
    if(smartwatchid) {
        Loc.findByIdAndRemove(smartwatchid)
        .exec(function(err,smartwatch){
            if(err) {
                sendJsonResponse(res,404,err);
                return;
            }
            else if(!smartwatch) {
                
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
