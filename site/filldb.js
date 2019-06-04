const mongoose = require("mongoose");
const Catalog = require('./models/Catalog');
var config = require('./config');

mongoose.connect(`mongodb://localhost:27017/${config.siteName}`, { useNewUrlParser: true }).then(() => {
    console.log("БД подключена");
    let items = [
    	{
			name: "Апельсин",
			code: "apelsin",
			isSection: false,
			parents: [ ]
		},
		{
			name: "Виноград",
			code: "vinograd",
			isSection: false,
			parents: [ ]
		},
		{
			name: "Яблоко",
			code: "yabloko",
			isSection: false,
			parents: [ ]
		},
		{
			name: "Пила",
			code: "pila",
			isSection: false,
			parents: [ ]
		},
		{
			name: "Молоток",
			code: "molotok",
			isSection: false,
			parents: [ ]
		},
		{
			name: "Фрукты",
			code: "frukti",
			isSection: true
		},
		{
			name: "Инструменты",
			code: "instrumenti",
			isSection: true
		}
    ];
    Catalog.collection.deleteMany().then(()=> {
    	console.log("Каталог отчищен");
    	Catalog.collection.insertMany(items).then(()=> {
    		console.log("Каталог записан");
    		mongoose.disconnect();
    	});
    });

    
});