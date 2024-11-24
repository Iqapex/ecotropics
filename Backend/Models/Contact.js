const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true }, // Ensure `phone` is stored as a string
    email: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
