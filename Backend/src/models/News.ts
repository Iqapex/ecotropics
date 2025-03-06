import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['environment', 'conservation', 'climate', 'community', 'events'],
    },
    image: {
      type: String,
      required: true,
    },
    tags: [{
      type: String,
    }],
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const News = mongoose.model('News', newsSchema);