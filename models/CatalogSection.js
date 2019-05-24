const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let catalogSection = new Schema(
	{
	    name: String,
	    foto: String,
	    code: String,
	    parents: [Schema.Types.ObjectId],
	    childrens: [Schema.Types.ObjectId]
	},
	{ 
		versionKey: false
	}
);

module.exports = mongoose.model('CatalogSection', catalogSection);