const Volunteer = require("../Models/Volunteer");

const volunteerForm = async (req, res) => {
    try {
        const { name, phone, email, address, skills, availability, message } = req.body;

        if (!name || !phone || !email || !address || !skills || !availability || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        await Volunteer.create({ name, phone, email, address, skills, availability, message });
        res.status(201).json({ message: "Volunteer form submitted successfully" });
    } catch (error) {
        console.error("Error submitting volunteer form:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = volunteerForm;
