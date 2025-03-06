import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Content } from '../models/Content.js';

// @desc    Create content
// @route   POST /api/content
// @access  Private
export const createContent = asyncHandler(async (req: Request, res: Response) => {
  const { title, section, subsection, content, images, order } = req.body;

  const newContent = await Content.create({
    title,
    section,
    subsection,
    content,
    images,
    order,
    lastUpdatedBy: req.user._id,
  });

  res.status(201).json(newContent);
});

// @desc    Update content
// @route   PUT /api/content/:id
// @access  Private
export const updateContent = asyncHandler(async (req: Request, res: Response) => {
  const content = await Content.findById(req.params.id);

  if (!content) {
    res.status(404);
    throw new Error('Content not found');
  }

  const updatedContent = await Content.findByIdAndUpdate(
    req.params.id,
    { ...req.body, lastUpdatedBy: req.user._id },
    { new: true, runValidators: true }
  );

  res.json(updatedContent);
});

// @desc    Delete content
// @route   DELETE /api/content/:id
// @access  Private
export const deleteContent = asyncHandler(async (req: Request, res: Response) => {
  const content = await Content.findById(req.params.id);

  if (!content) {
    res.status(404);
    throw new Error('Content not found');
  }

  await content.deleteOne();
  res.json({ message: 'Content removed' });
});

// @desc    Get content by section and subsection
// @route   GET /api/content/:section/:subsection
// @access  Public
export const getContent = asyncHandler(async (req: Request, res: Response) => {
  const content = await Content.findOne({
    section: req.params.section,
    subsection: req.params.subsection,
    isPublished: true,
  }).populate('lastUpdatedBy', 'name');

  if (!content) {
    res.status(404);
    throw new Error('Content not found');
  }

  res.json(content);
});

// @desc    Get all content by section
// @route   GET /api/content/:section
// @access  Public
export const getAllContent = asyncHandler(async (req: Request, res: Response) => {
  const content = await Content.find({
    section: req.params.section,
    isPublished: true,
  })
    .populate('lastUpdatedBy', 'name')
    .sort('order');

  res.json(content);
});