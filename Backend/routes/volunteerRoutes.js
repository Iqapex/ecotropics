const express = require("express");
const router = express.Router();
const {volunteerForm, getAllVolunteer, deleteVolunteerForm} = require("../controllers/volunteerController");

router.post("/", volunteerForm);
router.get("/", getAllVolunteer);
router.delete("/:id", deleteVolunteerForm);

module.exports = router;
