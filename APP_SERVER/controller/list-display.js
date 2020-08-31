var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
}

var renderListDisplay = function(req,res,responsebody) {
    
    res.render('list-display',
        {
            list : responsebody
        }
    )
    
}
var listDisplay = function(req,res){
    var requestOptions,path;
    path='/api/specifications';
    requestOptions = {
        url: apiOptions.server+ path,
        method: "GET",
        json:{}
    };
    request(requestOptions,function(err,response,body){
        
    renderListDisplay(req,res,body)
    })


}

module.exports = {
    listDisplay
}