import mongoose, { isValidObjectId } from "mongoose";
import { Video } from "../models/video.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Get all videos based on query, sort, and pagination
const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;

  const aggregateQuery = Video.aggregate([
    // Apply filters based on query parameters
    ...(query ? [{ $match: { title: { $regex: query, $options: "i" } } }] : []),
    ...(userId ? [{ $match: { owner: mongoose.Types.ObjectId(userId) } }] : []),
    // Add sorting based on sortBy and sortType
    ...(sortBy && sortType
      ? [{ $sort: { [sortBy]: sortType === "asc" ? 1 : -1 } }]
      : []),
  ]);

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  const videos = await Video.aggregatePaginate(aggregateQuery, options);

  res
    .status(200)
    .json(new ApiResponse(200, "Videos retrieved successfully.", videos));
});

// Publish a new video
const publishAVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const ownerId = req.user._id; // Assuming user ID is available in req.user

  // Upload video file and thumbnail to Cloudinary
  const { secure_url: videoFile, public_id: videoId } =
    await uploadOnCloudinary(req.files.videoFile);
  const { secure_url: thumbnail } = await uploadOnCloudinary(
    req.files.thumbnail
  );

  const newVideo = new Video({
    videoFile,
    thumbnail,
    title,
    description,
    duration: req.body.duration,
    owner: ownerId,
    channel: ownerId, // Assuming channel ID is the same as user ID
  });

  try {
    const savedVideo = await newVideo.save();
    res
      .status(201)
      .json(new ApiResponse(201, "Video published successfully.", savedVideo));
  } catch (error) {
    throw new ApiError(500, "Error publishing video.");
  }
});

// Get a specific video by ID
const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID.");
  }

  const video = await Video.findById(videoId).populate("comments"); // Populate comments details

  if (!video) {
    throw new ApiError(404, "Video not found.");
  }

  // Increment view count
  video.views++;
  await video.save();

  res
    .status(200)
    .json(new ApiResponse(200, "Video retrieved successfully.", video));
});

// Update an existing video
const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { title, description, thumbnail } = req.body;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID.");
  }

  const updatedVideo = await Video.findByIdAndUpdate(
    videoId,
    { title, description, thumbnail },
    { new: true, runValidators: true } // Return the updated document and run validation
  );

  if (!updatedVideo) {
    throw new ApiError(404, "Video not found.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Video updated successfully.", updatedVideo));
});

// Delete a video
const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID.");
  }

  const deletedVideo = await Video.findByIdAndDelete(videoId);

  if (!deletedVideo) {
    throw new ApiError(404, "Video not found.");
  }

  res.status(200).json(new ApiResponse(200, "Video deleted successfully."));
});

// Toggle publish status of a video
const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid video ID.");
  }

  const video = await Video.findById(videoId);

  if (!video) {
    throw new ApiError(404, "Video not found.");
  }

  video.isPublished = !video.isPublished;
  await video.save();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        `Video is now ${video.isPublished ? "published" : "unpublished"}.`
      )
    );
});

export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};
