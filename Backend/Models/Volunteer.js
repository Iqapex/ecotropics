const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    skills: { type: String, required: true }, // Example: Skills they want to contribute
    availability: { type: String, required: true }, // Example: Availability (e.g., weekdays/weekends)
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
