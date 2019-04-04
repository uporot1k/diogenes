const express = require('express');
const app = express();
const fs = require('fs');

//routers
const catalog = require('./routes/catalog');

app.use(express.static('public'));
app.use('/uploads', express.static('uploads') );
app.set("view engine", "ejs");


app.get('/', function(req, res) {
	res.render('main');
});

app.get('/admin', function(req, res) {
	res.render('{admin}/admin');
});

app.use('/catalog', catalog);

app.get('/:page', function(req, res){
	res.render( `${req.params.page}/index`);
});

app.listen(3000);
console.log('Server started');