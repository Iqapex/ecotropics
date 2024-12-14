const express = require("express");
const router = express.Router();
const { contactForm, getAllContacts } = require("../controllers/contactController");


router.post("/", contactForm);

router.get("/", getAllContacts)

module.exports = router;
