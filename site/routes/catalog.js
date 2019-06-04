const express = require('express');
const router = express.Router();

const Catalog = require('../models/Catalog');

router.get('/', function(req, res) {
    Catalog.find({}, function(err, data){
      if(err) return console.log(err);
      //res.render('about/index');
      res.send('11111');
  });
});


router.get(/\w+/, function(req, res) {
  	Catalog.find({}, function(err, data){
        if(err) return console.log(err);
        res.send(req.path.match(/\w+/g));
    });
});

// router.get('/:section', function(req, res) {
// 	let section = {};
// 	catalog.sections.forEach( function(elem, i) {
// 		if (elem.code == req.params['section']) {
// 			section = elem;
// 		}
// 	});
//   	res.render('catalog/section', {
//   		section: section
//   	});
// });

// router.get('/:section/:item', function(req, res) {
//   	let section = {};
//   	let item = {};
// 	catalog.sections.forEach( function(elem, i) {
// 		if (elem.code == req.params['section']) {
// 			section = elem;
// 		};
// 	});
// 	section.items.forEach( function(elem, i) {
// 		if (elem.code == req.params['item']) {
// 			item = elem;
// 		};
// 	});
//   	res.render('catalog/item', {
//   		item: item,
//   		section: {
//   			code: section.code,
//   			name: section.name
//   		}
//   	});
// });

module.exports = router;