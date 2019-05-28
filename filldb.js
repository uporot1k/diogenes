const mongoose = require("mongoose");
const Catalog = require('./models/Catalog');

mongoose.connect("mongodb://localhost:27017/diogenes", { useNewUrlParser: true }).then(() => {
    console.log("БД подключена");
    let items = [
    	{
			name: "Апельсин",
			foto: "/uploads/catalog/апельсин.jpg",
			code: "apelsin",
			price: 50,
			isSection: false,
			parents: [  ]
		},
		{
			name: "Виноград",
			foto: "/uploads/catalog/виноград.jpg",
			code: "vinograd",
			price: 80,
			isSection: false,
			parents: [  ]
		},
		{
			name: "Яблоко",
			foto: "/uploads/catalog/яблоко.jpeg",
			code: "yabloko",
			price: 30,
			isSection: false,
			parents: [ ]
		},
		{
			name: "Пила",
			foto: "/uploads/catalog/пила.jpg",
			code: "pila",
			price: 750,
			isSection: false,
			parents: [  ]
		},
		{
			name: "Молоток",
			foto: "/uploads/catalog/молоток.jpg",
			code: "molotok",
			price: 400,
			isSection: false,
			parents: [  ]
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