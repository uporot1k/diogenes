const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require("mongoose");

//routers
const catalog = require('./routes/catalog');

app.use(express.static('public'));
app.use('/uploads', express.static('uploads') );
app.use('/admin', express.static('admin/public') );
app.set("view engine", "ejs");


app.get('/', function(req, res) {
	res.render('main');
});

app.get('/admin', function(req, res) {
	res.render('../admin/views/index');
});

app.use('/catalog', catalog);

app.get('/:page', function(req, res){
	res.render( `${req.params.page}/index`);
});

mongoose.connect("mongodb://localhost:27017/diogenes", { useNewUrlParser: true }).then((err) => {
    if(err) return console.log(err);
    app.listen(80, function(){
        console.log("Сервер запущен");
    });
});