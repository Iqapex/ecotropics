const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { checkStripeConnection } = require("./config/stripe"); // Import Stripe checker
const contactRoute = require("./routes/contactRoutes");
const volunteerRoute = require("./routes/volunteerRoutes");
const partnerRoute = require("./routes/partnerRoutes");
const joinUsRoute = require("./routes/joinUsRoutes");
const stripeRoute = require("./stripe");

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
app.use("/api/joinus", joinUsRoute);
app.use("/api/stripe", stripeRoute);

// Root Route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Test Stripe Connection
checkStripeConnection();

// Connect to MongoDB and start the server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
