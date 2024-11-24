const express = require("express");
const router = express.Router();
const volunteerForm = require("../controllers/volunteerController");

router.post("/", volunteerForm);

module.exports = router;
