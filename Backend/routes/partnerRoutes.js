const express = require("express");
const router = express.Router();
const partnerForm = require("../controllers/partnerController");

router.post("/", partnerForm);

module.exports = router;
