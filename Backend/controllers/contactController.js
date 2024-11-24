const Contact = require("../Models/Contact");

const contactForm = async (req, res) => {
    try {
        const { name, phone, email, address, message } = req.body;

        if (!name || !phone || !email || !address || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await Contact.create({ name, phone, email, address, message });
        res.status(201).json({ message: "Contact form submitted successfully" });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = contactForm;
