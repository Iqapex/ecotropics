const express = require("express");
const router = express.Router();
const {partnerForm, getAllPartner} = require("../controllers/partnerController");

router.post("/", partnerForm);
router.get("/", getAllPartner)

module.exports = router;
