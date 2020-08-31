
var mongoose = require('mongoose');
var Loc = mongoose.model("Specs");
var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}
var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}
module.exports.platform = function(req,res) {
    if(req.params && req.params.specid){
    Loc.findById(req.params.specid).select("name platform").exec(function(err,specification){
    if(!specification){
        var response, platform;
        sendJsonResponse(res,404,{
            message: "Not Found"
        })
        return;
    }
    else if (err){
        sendJsonResponse(res,404,err)
        return;
    }
    console.log(specification);
    console.log(specification.platform);
    if(specification.platform){
        platform = specification.platform;
        if(!platform) {
            sendJsonResponse(res,404,{
                "message": "platformid not found"
            })
        }
            else{
                response = {
                   specification: { 
                    name: specification.name,
                    id: req.params.specid
                },
                platform : platform
            }
            
    sendJsonResponse(res,200,response);
            }

        }
        else{
            sendJsonResponse(res, 404, {
                "message" : "No platform found"
            })
        }
    }
    )
}
}


module.exports.platformUpdateOne = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}
module.exports.platformDeleteOne = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}
