/**
 * Created by Phil on 5/13/16.
 */
var express = require('express');
const PORT = process.env.PORT || 3000;

// create our app

var app = express();

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http'){
        next();
    }else{
        res.redirect('https://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){

    console.log('express server is up on port ' + PORT);
});