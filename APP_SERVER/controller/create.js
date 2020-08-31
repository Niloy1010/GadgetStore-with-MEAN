var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
}
var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}


var doAddItem = function(req,res) {
    var requestOptions, path,postData;
    path = "/api/specifications";
    postData = {
        name: req.body.name,
        cpu: req.body.cpu,
        internalMemory: req.body.internalMemory,
        camera: req.body.camera,
        price: req.body.price,
        img: '/images/' + req.body.img,
        platform : {
            os: req.body.os,
            chipset: req.body.chipset,
            gpu: req.body.gpu
        }
    };
    requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json : postData
    };
    console.log(postData);
    request(
        requestOptions,
        function(err,response,body){
            if(response.statusCode===201) {
                res.redirect('/');
            }
            else{
sendJsonResponse(res,400,{"message":"error"})
            }
        }
    )

}

var create = function(req,res) {
    res.render("create",{});
}
module.exports ={
    create,doAddItem
}