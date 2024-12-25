import mongoose, { isValidObjectId } from "mongoose";
import { Tweet } from "../models/tweet.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create a new tweet
const createTweet = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const ownerId = req.user._id; // Assuming user ID is available in req.user

  if (!content) {
    throw new ApiError(400, "Content is required.");
  }

  const newTweet = new Tweet({
    content,
    owner: ownerId,
  });

  try {
    const savedTweet = await newTweet.save();
    res
      .status(201)
      .json(new ApiResponse(201, "Tweet created successfully.", savedTweet));
  } catch (error) {
    throw new ApiError(500, "Error creating tweet.");
  }
});

// Get all tweets by a specific user
const getUserTweets = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId)) {
    throw new ApiError(400, "Invalid user ID.");
  }

  const tweets = await Tweet.find({ owner: userId }).sort({ createdAt: -1 }); // Sort by creation date, descending

  if (!tweets.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, "No tweets found for this user."));
  }

  res
    .status(200)
    .json(new ApiResponse(200, "User tweets retrieved successfully.", tweets));
});

// Update an existing tweet
const updateTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;
  const { content } = req.body;

  if (!isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet ID.");
  }

  const updatedTweet = await Tweet.findByIdAndUpdate(
    tweetId,
    { content },
    { new: true, runValidators: true } // Return the updated document and run validation
  );

  if (!updatedTweet) {
    throw new ApiError(404, "Tweet not found.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Tweet updated successfully.", updatedTweet));
});

// Delete a tweet
const deleteTweet = asyncHandler(async (req, res) => {
  const { tweetId } = req.params;

  if (!isValidObjectId(tweetId)) {
    throw new ApiError(400, "Invalid tweet ID.");
  }

  const deletedTweet = await Tweet.findByIdAndDelete(tweetId);

  if (!deletedTweet) {
    throw new ApiError(404, "Tweet not found.");
  }

  res.status(200).json(new ApiResponse(200, "Tweet deleted successfully."));
});

export { createTweet, getUserTweets, updateTweet, deleteTweet };
