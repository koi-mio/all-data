import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Like } from "../models/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Controller to get channel statistics
const getChannelStats = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  // Validate channelId
  if (!mongoose.Types.ObjectId.isValid(channelId)) {
    throw new ApiError(400, "Invalid channel ID.");
  }

  // Get total subscribers
  const totalSubscribers = await Subscription.countDocuments({
    channel: channelId,
  });

  // Get total videos
  const totalVideos = await Video.countDocuments({ owner: channelId });

  // Get total likes across all videos of the channel
  const totalLikes = await Like.countDocuments({
    video: { $in: await Video.find({ owner: channelId }).distinct("_id") },
  });

  // Get total views across all videos of the channel
  const totalViews = await Video.aggregate([
    { $match: { owner: channelId } },
    { $group: { _id: null, totalViews: { $sum: "$views" } } },
  ]);

  res.status(200).json(
    new ApiResponse(200, "Channel statistics retrieved successfully.", {
      totalSubscribers,
      totalVideos,
      totalLikes,
      totalViews: totalViews[0]?.totalViews || 0,
    })
  );
});

// Controller to get all videos uploaded by the channel
const getChannelVideos = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  // Validate channelId
  if (!mongoose.Types.ObjectId.isValid(channelId)) {
    throw new ApiError(400, "Invalid channel ID.");
  }

  const videos = await Video.find({ owner: channelId }).sort({ createdAt: -1 }); // Sort by creation date, descending

  if (!videos.length) {
    throw new ApiError(404, "No videos found for this channel.");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "Channel videos retrieved successfully.", videos)
    );
});

export { getChannelStats, getChannelVideos };
