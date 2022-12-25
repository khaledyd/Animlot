import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    describtion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    isSponsorred: {
      type: Boolean,
      default: "false",
    },
    typeOfQuestion: {
      type: [String],
      default: [],
      required: true,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
