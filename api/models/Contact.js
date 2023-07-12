const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		phone: {
			type: Number,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
