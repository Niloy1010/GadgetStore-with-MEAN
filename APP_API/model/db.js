var mongoose = require('mongoose');
var dbURI = "mongodb+srv://biozidniloy10:biozidniloy10@bncluster-uqydq.mongodb.net/biozidniloy10?retryWrites=true&w=majority";

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true, dbName:'DATACONNECTIVITY' });



mongoose.connection.on('connected', function(){
    console.log("Mongoose connceted to "+ dbURI);
});
mongoose.connection.on('error', function(){
    console.log('connection error'+ err);
    
});
mongoose.connection.on('disconnected', function(){
    console.log("mongoose Disconnected");
});

var gracefulShutdown = function(msg,callback){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected through'+msg);
        callback();
    })
}
    process.once("SIGUSR2", function(){
        gracefulShutdown('nodemon restart', function(){
            process.kill(process.pid, 'SIGUSR2');
        })
    })

    process.on('SIGINT', function(){
        gracefulShutdown('app termination', function(){
            process.exit(0);
        })
    
    })
    process.on('SIGTERM', function(){
        gracefulShutdown('Heroku app shutdown', function(){
            process.exit(0);
        })
    });
    require("./specifications");
    require("./users");
    require('./headphones')
    require('./smartwatch')