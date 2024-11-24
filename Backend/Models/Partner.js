const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true }, // Partner-specific: Company/Organization name
    address: { type: String, required: true },
    partnershipType: { type: String, required: true }, // Example: Sponsorship/Collaboration
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
