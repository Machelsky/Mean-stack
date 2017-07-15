var express = require('express');
var app  = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var config = require('./config');
var port = process.env.PORT || 3000;
var setupController = require('./controllers/setupController');
app.use('/assets', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.render('index');
});
var apiController = require('./controllers/apiController');
app.set('view engine', 'ejs');
var mongoDB = mongoose.connect(config.getDbConnectionString(),{
    useMongoClient: true
});
mongoDB
    .then(function (db) {
        console.log('mongodb has been connected');
    })
    .catch(function (err) {
        console.log('error while trying to connect with mongodb');
    });
setupController(app);
apiController(app);
app.listen(port);