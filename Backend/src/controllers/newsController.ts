import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { News } from '../models/News.js';

// @desc    Create a news article
// @route   POST /api/news
// @access  Private
export const createNews = asyncHandler(async (req: Request, res: Response) => {
  const { title, content, category, image, tags, slug } = req.body;

  const news = await News.create({
    title,
    content,
    category,
    image,
    tags,
    slug,
    author: req.user._id,
  });

  res.status(201).json(news);
});

// @desc    Update a news article
// @route   PUT /api/news/:id
// @access  Private
export const updateNews = asyncHandler(async (req: Request, res: Response) => {
  const news = await News.findById(req.params.id);

  if (!news) {
    res.status(404);
    throw new Error('News article not found');
  }

  const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json(updatedNews);
});

// @desc    Delete a news article
// @route   DELETE /api/news/:id
// @access  Private
export const deleteNews = asyncHandler(async (req: Request, res: Response) => {
  const news = await News.findById(req.params.id);

  if (!news) {
    res.status(404);
    throw new Error('News article not found');
  }

  await news.deleteOne();
  res.json({ message: 'News article removed' });
});

// @desc    Get a single news article
// @route   GET /api/news/:slug
// @access  Public
export const getNews = asyncHandler(async (req: Request, res: Response) => {
  const news = await News.findOne({ slug: req.params.slug }).populate('author', 'name');

  if (!news) {
    res.status(404);
    throw new Error('News article not found');
  }

  res.json(news);
});

// @desc    Get all news articles
// @route   GET /api/news
// @access  Public
export const getAllNews = asyncHandler(async (req: Request, res: Response) => {
  const { category, tag, page = 1, limit = 10 } = req.query;
  const query: any = {};

  if (category) {
    query.category = category;
  }

  if (tag) {
    query.tags = tag;
  }

  const count = await News.countDocuments(query);
  const news = await News.find(query)
    .populate('author', 'name')
    .sort({ createdAt: -1 })
    .limit(Number(limit))
    .skip((Number(page) - 1) * Number(limit));

  res.json({
    news,
    totalPages: Math.ceil(count / Number(limit)),
    currentPage: Number(page),
  });
});