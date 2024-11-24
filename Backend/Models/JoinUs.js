const mongoose = require("mongoose");

const joinUsSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const JoinUs = mongoose.model("JoinUs", joinUsSchema);

module.exports = JoinUs;
