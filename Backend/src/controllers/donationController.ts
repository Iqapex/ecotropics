import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Donation } from '../models/Donation.js';

// @desc    Create PayPal order
// @route   POST /api/donations/create-paypal-order
// @access  Private
export const createPayPalOrder = asyncHandler(async (req: Request, res: Response) => {
  const { amount, isRecurring } = req.body;

  // Here you would integrate with PayPal's API to create an order
  // This is a placeholder for the actual PayPal integration
  const order = {
    id: 'MOCK_ORDER_ID',
    status: 'CREATED',
    amount: amount,
  };

  res.json(order);
});

// @desc    Capture PayPal order
// @route   POST /api/donations/capture-paypal-order
// @access  Private
export const capturePayPalOrder = asyncHandler(async (req: Request, res: Response) => {
  const { orderId } = req.body;

  // Here you would integrate with PayPal's API to capture the payment
  // This is a placeholder for the actual PayPal integration
  const donation = await Donation.create({
    user: req.user._id,
    amount: 100, // This would come from the PayPal order details
    currency: 'USD',
    paymentMethod: 'paypal',
    status: 'completed',
    paymentId: orderId,
    isRecurring: false,
  });

  res.json(donation);
});

// @desc    Get donation history
// @route   GET /api/donations/history
// @access  Private
export const getDonationHistory = asyncHandler(async (req: Request, res: Response) => {
  const donations = await Donation.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(donations);
});