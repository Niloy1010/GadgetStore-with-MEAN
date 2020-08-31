

var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}


module.exports.display = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}
module.exports.displayCreate = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}
module.exports.displayReadOne = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}
module.exports.displayUpdateOne = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}
module.exports.displayDeleteOne = function(req,res) {
    sendJsonResponse(res,200,{"status":"success"});

}