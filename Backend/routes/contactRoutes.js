const express = require("express");
const router = express.Router();
const { contactForm, getAllContacts, deleteContactForm } = require("../controllers/contactController");


router.post("/", contactForm);

router.get("/", getAllContacts)

router.delete("/:id", deleteContactForm);


module.exports = router;
