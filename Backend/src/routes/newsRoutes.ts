import express from 'express';
import {
  createNews,
  updateNews,
  deleteNews,
  getNews,
  getAllNews,
} from '../controllers/newsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createNews);
router.put('/:id', protect, updateNews);
router.delete('/:id', protect, deleteNews);
router.get('/:slug', getNews);
router.get('/', getAllNews);

export const newsRoutes = router;