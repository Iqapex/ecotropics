const express = require('express');
const router = express.Router();
const { createDonation } = require('../controllers/doantionController');

router.post('/pay', createDonation);

module.exports = router;
