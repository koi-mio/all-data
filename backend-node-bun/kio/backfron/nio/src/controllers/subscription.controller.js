import mongoose, { isValidObjectId } from "mongoose";
import { User } from "../models/user.model.js";
import { Subscription } from "../models/subscription.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Toggle subscription to a channel
const toggleSubscription = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
  const subscriberId = req.user._id; // Assuming user ID is available in req.user

  // Validate ObjectId
  if (!isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid channel ID.");
  }

  // Check if the subscription already exists
  const existingSubscription = await Subscription.findOne({
    subscriber: subscriberId,
    channel: channelId,
  });

  if (existingSubscription) {
    // If it exists, remove the subscription
    await Subscription.findByIdAndDelete(existingSubscription._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Unsubscribed from channel successfully."));
  } else {
    // If it doesn't exist, add a new subscription
    const newSubscription = new Subscription({
      subscriber: subscriberId,
      channel: channelId,
    });
    await newSubscription.save();
    return res
      .status(201)
      .json(new ApiResponse(201, "Subscribed to channel successfully."));
  }
});

// Controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
  const { channelId } = req.params;

  // Validate ObjectId
  if (!isValidObjectId(channelId)) {
    throw new ApiError(400, "Invalid channel ID.");
  }

  // Find subscribers for the channel
  const subscribers = await Subscription.find({ channel: channelId }).populate(
    "subscriber",
    "username"
  ); // Populate subscriber details

  if (!subscribers.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, "No subscribers found for this channel."));
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "Subscribers retrieved successfully.", subscribers)
    );
});

// Controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
  const subscriberId = req.user._id; // Assuming user ID is available in req.user

  // Find subscriptions for the subscriber
  const subscriptions = await Subscription.find({
    subscriber: subscriberId,
  }).populate("channel", "username"); // Populate channel details

  if (!subscriptions.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, "No subscribed channels found."));
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Subscribed channels retrieved successfully.",
        subscriptions
      )
    );
});

export { toggleSubscription, getUserChannelSubscribers, getSubscribedChannels };
