const Partner = require("../Models/Partner");

const partnerForm = async (req, res) => {
    try {
        const { name, phone, email, companyName, address, partnershipType, message } = req.body;

        if (!name || !phone || !email || !companyName || !address || !partnershipType || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await Partner.create({ name, phone, email, companyName, address, partnershipType, message });
        res.status(201).json({ message: "Partner form submitted successfully" });
    } catch (error) {
        console.error("Error submitting partner form:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = partnerForm;
