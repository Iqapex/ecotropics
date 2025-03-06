import express from 'express';
import {
  createContent,
  updateContent,
  deleteContent,
  getContent,
  getAllContent,
} from '../controllers/contentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createContent);
router.put('/:id', protect, updateContent);
router.delete('/:id', protect, deleteContent);
router.get('/:section/:subsection', getContent);
router.get('/:section', getAllContent);

export const contentRoutes = router;