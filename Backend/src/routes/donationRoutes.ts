import express from 'express';
import {
  createPayPalOrder,
  capturePayPalOrder,
  getDonationHistory,
} from '../controllers/donationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-paypal-order', protect, createPayPalOrder);
router.post('/capture-paypal-order', protect, capturePayPalOrder);
router.get('/history', protect, getDonationHistory);

export const donationRoutes = router;