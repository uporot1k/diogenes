const express = require('express');
const router = express.Router();


//костыль вместо бд
const fs = require('fs');
let catalog = {};
fs.readFile(__dirname + '/../db/catalog.json', 'utf8', (err, data) => {
	if (err) console.log(err);
	catalog = JSON.parse(data);
});


router.get('/', function(req, res) {
  	res.render('catalog/index', {
  		sections: catalog.sections
  	});
});

router.get('/:section', function(req, res) {
	let section = {};
	catalog.sections.forEach( function(elem, i) {
		if (elem.code == req.params['section']) {
			section = elem;
		}
	});
  	res.render('catalog/section', {
  		section: section
  	});
});

router.get('/:section/:item', function(req, res) {
  	res.render('catalog/item');
  	let section = {};
  	let item = {};
	catalog.sections.forEach( function(elem, i) {
		if (elem.code == req.params['section']) {
			section = elem;
		};
	});
	section.items.forEach( function(elem, i) {
		if (elem.code == req.params['item']) {
			item = elem;
		};
	});
  	res.render('catalog/item', {
  		item: item,
  		section: {
  			code: section.code,
  			name: section.name
  		}
  	});
});

module.exports = router;