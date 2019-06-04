const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require("mongoose");

var config = require('./config');

//routers
const catalog = require('./routes/catalog');


app.use(express.static('public'));
app.use('/uploads', express.static('uploads') );
app.use('/admin', express.static('admin') );
app.set("view engine", "ejs");


app.get('/', function(req, res) {
	res.render('main');
});

app.get(/admin/, function(req, res) {
	res.sendFile(__dirname + '/admin/index.html');
});

app.get('/adminTest', function(req, res) {
	res.render('../adminTest/views/index');
});

app.use('/catalog', catalog); 

app.get('/:page', function(req, res){
	res.render( `${req.params.page}/index`);
});

mongoose.connect(`mongodb://localhost:27017/${config.siteName}`, { useNewUrlParser: true })
	.then(() => {
	    app.listen(config.port, function(){
	        console.log(`Сервер запущен на ${config.port}`);
	    });
	});