const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogItem = new Schema(
	{
	    name: String,
	    foto: String,
	    code: String,
	    price: Number,
	    parents: [Schema.Types.ObjectId]
	},
	{ 
		versionKey: false
	}
);

module.exports = mongoose.model('CatalogItem', catalogItem);