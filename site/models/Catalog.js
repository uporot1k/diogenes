const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let catalog = new Schema(
	{
	    name: String,
	    foto: String,
	    code: String,
	    price: Number,
	    description: String,
	    isSection: Boolean,
	    parents: [Schema.Types.ObjectId],
	    childrens: [Schema.Types.ObjectId]
	},
	{ 
		versionKey: false,
	}
);


module.exports = mongoose.model('Catalog', catalog);