const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoute = require("./routes/contactRoutes");
const volunteerRoute = require("./routes/volunteerRoutes");
const partnerRoute = require("./routes/partnerRoutes");
const joinUsRoute = require("./routes/joinUsRoutes"); // Import JoinUs route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/contact", contactRoute);
app.use("/api/volunteer", volunteerRoute);
app.use("/api/partner", partnerRoute);
app.use("/api/joinus", joinUsRoute); // Use JoinUs route

// Root Route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// MongoDB Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process on error
    });
