var mongoose = require('mongoose');
var Loc = mongoose.model("Specs");

var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}


module.exports.specifications = function(req,res) {
    Loc.find().exec(function(err,specification){
        if(!specification){
            sendJsonResponse(res,404,{
                message: "Not Found"
            })
        }
        else if (err){
            sendJsonResponse(res,404,err)
        }
        
        sendJsonResponse(res,200,specification);
    })
    }


module.exports.specificationsCreate = function(req,res) {

    Loc.create({
        gadget: 'display',
        name:req.body.name,
        cpu: req.body.cpu,
        internalMemory: req.body.internalMemory,
        camera: req.body.camera,
        price: req.body.price,
        img: req.body.img,
        platform : {
            os: req.body.platform.os,
            chipset: req.body.platform.chipset,
            gpu: req.body.platform.gpu
        }

    },
    function(err,specification) {
        if(err){
            sendJsonResponse(res,400,err);
        }
        else{
            sendJsonResponse(res,201,specification);
        }
    }
    )

}
module.exports.specificationsReadOne = function(req,res) {
    
    if(req.params && req.params.specid) {
    Loc.findById(req.params.specid)
    .exec(function(err,specification){
        if(!specification){
        sendJsonResponse(res,404,{
            message: "Not Found"
        })
        return;
    }
    else if (err){
        sendJsonResponse(res,404,err);
        
        return;
    }
    
    sendJsonResponse(res,200,specification);
})
    }
    else {
        sendJsonResponse(res,404,{
            message: "No specification id Found"
        })
    }
}


module.exports.specificationsUpdateOne = function(req,res) {
    if(!req.params.specid) {
        sendJsonResponse(res,404,{
            "Message" : "Speicification id required"
        })
        return;
    }
    Loc.findById(req.params.specid).exec(function(err,specification){
        if(!specification) {
            sendJsonResponse(res,404,{

                "message": "specification not found"
               
            })
            return;
        }
        else if(err) {
            sendJsonResponse(res,400,err);
            return;
        }
        console.log(specification);
        specification.name = req.body.name;
        specification.cpu = req.body.cpu;
        specification.internalMemory = req.body.internalMemory;
        specification.camera = req.body.camera;
        specification.img = req.body.img;
        specification.price = req.body.price;
        specification.platform.os = req.body.platform.os;
        specification.platform.chipset = req.body.platform.chipset;
        specification.platform.gpu = req.body.platform.gpu;
        specification.save(function(err,specification){
            if(err) {
                sendJsonResponse(res,400,err)
            }
            else{
                sendJsonResponse(res,200,specification)
            }
        })
        
    })

}
module.exports.specificationsDeleteOne = function(req,res) {
    var specid = req.params.specid;
    if(specid) {
        Loc.findByIdAndRemove(specid)
        .exec(function(err,specification){
            if(err) {
                sendJsonResponse(res,404,err);
                return;
            }
            else if(!specification) {
                
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
