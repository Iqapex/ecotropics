const express = require("express");
const router = express.Router();
const joinUsForm = require("../controllers/joinUsController");

router.post("/", joinUsForm);

module.exports = router;
