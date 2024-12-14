const express = require("express");
const router = express.Router();
const { joinUsForm, getJoinUsEmails } = require("../controllers/joinUsController");

// Route to handle form submissions
router.post("/", joinUsForm);

// Route to fetch all emails
router.get("/", getJoinUsEmails);

module.exports = router;
