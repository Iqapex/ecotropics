const express = require("express");
const router = express.Router();
const { joinUsForm, getJoinUsEmails, deleteJoinUsEmail } = require("../controllers/joinUsController");

// Route to handle form submissions
router.post("/", joinUsForm);

// Route to fetch all emails
router.get("/", getJoinUsEmails);

// Route to delete an email by ID
router.delete("/:id", deleteJoinUsEmail);


module.exports = router;
