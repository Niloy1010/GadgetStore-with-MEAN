var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
}

var renderDisplay = function(req,res,responsebody) {
    console.log(responsebody);
    
    res.render('display',
        {
            list : responsebody
        }
    )
    
}
var display = function(req,res) {
    var requestOptions,path;
    path = "/api/specifications/"+req.params.specid;
    requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    request(requestOptions,
        function(err,response,body){
            renderDisplay(req,res,body)
            
        })
}
module.exports = {
    display
}