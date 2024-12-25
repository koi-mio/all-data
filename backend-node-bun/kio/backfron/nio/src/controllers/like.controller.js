import mongoose, { isValidObjectId } from "mongoose";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Toggle like on a video
const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const userId = req.user._id; // Assuming user ID is available in req.user

  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID.");
  }

  // Check if the like already exists
  const existingLike = await Like.findOne({ video: videoId, likedBy: userId });

  if (existingLike) {
    // If it exists, remove the like
    await Like.findByIdAndDelete(existingLike._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Like removed from video."));
  } else {
    // If it doesn't exist, add a new like
    const newLike = new Like({ video: videoId, likedBy: userId });
    await newLike.save();
    return res.status(201).json(new ApiResponse(201, "Like added to video."));
  }
});

// Toggle like on a comment
const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user._id; // Assuming user ID is available in req.user

  if (!isValidObjectId(commentId)) {
    throw new ApiError(400, "Invalid comment ID.");
  }

  // Check if the like already exists
  const existingLike = await Like.findOne({
    comment: commentId,
    likedBy: userId,
  });

  if (existingLike) {
    // If it exists, remove the like
    await Like.findByIdAndDelete(existingLike._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Like removed from comment."));
  } else {
    // If it doesn't exist, add a new like
    const newLike = new Like({ comment: commentId, likedBy: userId });
    await newLike.save();
    return res.status(201).json(new ApiResponse(201, "Like added to comment."));
  }
});

// Toggle like on a tweet
const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const userId = req.user._id; // Assuming user ID is available in req.user

  if (!isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet ID.");
  }

  // Check if the like already exists
  const existingLike = await Like.findOne({ tweet: tweetId, likedBy: userId });

  if (existingLike) {
    // If it exists, remove the like
    await Like.findByIdAndDelete(existingLike._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Like removed from tweet."));
  } else {
    // If it doesn't exist, add a new like
    const newLike = new Like({ tweet: tweetId, likedBy: userId });
    await newLike.save();
    return res.status(201).json(new ApiResponse(201, "Like added to tweet."));
  }
});

// Get all liked videos for the authenticated user
const getLikedVideos = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming user ID is available in req.user

  const likedVideos = await Like.find({ likedBy: userId, video: { $ne: null } })
    .populate("video") // Populate video details
    .exec();

  if (!likedVideos.length) {
    return res.status(404).json(new ApiResponse(404, "No liked videos found."));
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "Liked videos retrieved successfully.", likedVideos)
    );
});

export { toggleCommentLike, toggleTweetLike, toggleVideoLike, getLikedVideos };
