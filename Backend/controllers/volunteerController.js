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

const getAllVolunteer = async (req, res) => { 
    try { 
        const volunteer = await Volunteer.find({}); 
        res.status(200).json(volunteer); 
    } catch (error) { 
        console.error("Error retrieving volunteer data:", error); 
        res.status(500).json({ error: "Internal Server Error" }); 
    } 
};

const deleteVolunteerForm = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteVolunteer = await Volunteer.findByIdAndDelete(id);
        if (!deleteVolunteer) {
            return res.status(404).json({ error: "Volunteer not found" });
        }

        res.status(200).json({ message: "Volunteer deleted" });
    } catch (error) {
        console.error("Error deleting Volunteer:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {volunteerForm, getAllVolunteer, deleteVolunteerForm};
