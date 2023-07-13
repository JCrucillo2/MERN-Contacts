require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server started on port ${process.env.PORT} and connected to DB`);
		});
	})
	.catch((err) => console.log(err));

const Contact = require("./models/Contact");

// GET all contacts
app.get("/api/contacts", async (req, res) => {
	const contact = await Contact.find();

	res.status(200).json(contact);
});

// GET a SINGLE contact
app.get("/api/contact/:id", async (req, res) => {
	const { id } = req.params;

	const contact = await Contact.findById(id);

	if (!contact) {
		return res.status(400).json({ error: "No such contact" });
	}

	res.status(200).json(contact);
});

// CREATE a contact
app.post("/api/contact/new", (req, res) => {
	const contact = new Contact({
		title: req.body.title,
		description: req.body.description,
		phone: req.body.phone,
		email: req.body.email,
		address: req.body.address,
	});

	contact.save();

	res.status(200).json(contact);
});

// DELETE a contact
app.delete("/api/contact/:id", async (req, res) => {
	const { id } = req.params;

	const contact = await Contact.findByIdAndDelete(id);

	if (!contact) {
		return res.status(400).json({ error: "No such contact to delete" });
	}

	res.status(200).json(contact);
});

// UPDATE a contact
app.patch("/api/contact/:id", async (req, res) => {
	const { id } = req.params;

	const contact = await Contact.findByIdAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!contact) {
		return res.status(400).json({ error: "No such contact edit" });
	}

	res.status(200).json(contact);
});
