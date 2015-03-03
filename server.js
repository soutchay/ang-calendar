var express = require('express');
var app     = express();
var path    = require('path');


var router  = express.Router();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/app/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(__dirname + '/public/app'));

//Set Up Routes
router.route('/')
    .get(function(req, res){
        res.render('index');
    });

//Use Router
app.use(router);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Server running on port:', port);