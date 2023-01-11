import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  reactions: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Post', postSchema);
