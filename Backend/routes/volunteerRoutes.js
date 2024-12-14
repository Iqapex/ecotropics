const express = require("express");
const router = express.Router();
const {volunteerForm, getAllVolunteer} = require("../controllers/volunteerController");

router.post("/", volunteerForm);
router.get("/", getAllVolunteer);

module.exports = router;
