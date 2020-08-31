var mongoose=  require('mongoose');

const jwt = require('jsonwebtoken');
const { use } = require('../routes');
const router = require('../../APP_SERVER/route/users');
var Loc = mongoose.model("Users");

var sendJsonResponse = function(res, status, content)  {
    res.status(status);
    res.json(content);
}


module.exports.verifyToken = function(req,res,next) {

    if(!req.headers.authorization) {
        return res.status(401).send("Unauthorized Request");
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token ==='null') {
        
        return res.status(401).send("Unauthorized Request");
    }
    let payload = jwt.verify(token, 'secretKey');
    if(!payload) {
        
        return res.status(401).send("Unauthorized Request");
    }
    req.userId = payload.subject
    next();

}

module.exports.checkout = function(req,res) {
    let events = [

    ]
    res.json(events);
}


module.exports.users = function(req,res) {
    Loc.find().exec(function(err,user){
        console.log(user);
        if(!user){
            sendJsonResponse(res,404,{
                message: "Not Found"
            })
        }
        else if (err){
            sendJsonResponse(res,404,err)
        }
        
        sendJsonResponse(res,200,user);
    })
    }

    module.exports.usersCreate = function(req,res) {

        Loc.create({
            email: req.body.email,
            password: req.body.password,
            fname: req.body.fname,
            lname: req.body.lname
            }, (error, registeredUser)=> {
                if(error) {
                    sendJsonResponse(res,500,"can't create")
                }
                else{
                    let payload = {
                        subject : registeredUser.email,
                        subjectId : registeredUser._id,
                        name: registeredUser.name
                    }
                    let token = jwt.sign(payload, 'secretKey');
                    console.log(token);
                    sendJsonResponse(res,200,{token});
                }
            })
    
        }


        module.exports.usersReadOne = function(req,res) {
            console.log(req.body);
    
            if(req.params) {
            Loc.
            
            
            
            findOne({
                email : req.body.email
            },(err,user) =>{
                console.log(user);
                console.log(req.body.pass);
                if(err){
                    sendJsonResponse(res,404,err)
                }
                else{
                    if(!user) {
                        sendJsonResponse(res,401,"Invalid email")
                    }
                    else{
                        if(user.password !==req.body.password) {
                            sendJsonResponse(res,401,"Invalid Password")
                        }
                        else{
                            let payload = {
                                subject: user.email,
                                subjectId : user._id,
                                name: user.name
                            }
                            let token = jwt.sign(payload,'secretKey');
                            sendJsonResponse(res,200,{token});
                        }
                    }
                }
            })  
        }
    }




