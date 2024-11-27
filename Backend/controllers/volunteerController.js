const Volunteer = require("../Models/Volunteer");

const volunteerForm = async (req, res) => {
    try {
        const { name, phone, email, skills, availability, message, address } = req.body;

        if (!name || !phone || !email || !skills || !availability || !message) {
            return res.status(400).json({ error: "Required fields are missing" });
        }

        const newVolunteer = await Volunteer.create({
            name,
            phone,
            email,
            skills,
            availability,
            message,
            address: address || '',
        });

        res.status(201).json({ message: "Volunteer form submitted successfully", volunteer: newVolunteer });
    } catch (error) {
        console.error("Error submitting volunteer form:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = volunteerForm;
