const express = require("express");
const router = express.Router();
const {partnerForm, getAllPartner, deletePartnerForm} = require("../controllers/partnerController");

router.post("/", partnerForm);
router.get("/", getAllPartner);
router.delete("/:id", deletePartnerForm);

module.exports = router;
