import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
      enum: ['what-we-do', 'about-us', 'get-involved', 'membership'],
    },
    subsection: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: [{
      type: String,
    }],
    order: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    lastUpdatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Content = mongoose.model('Content', contentSchema);