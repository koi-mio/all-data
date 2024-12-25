import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from "../models/playlist.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create a new playlist
const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const userId = req.user._id; // Assuming user ID is available in req.user

  const newPlaylist = new Playlist({
    name,
    description,
    owner: userId,
    videos: [], // Initialize with an empty array
  });

  try {
    const savedPlaylist = await newPlaylist.save();
    res
      .status(201)
      .json(
        new ApiResponse(201, "Playlist created successfully.", savedPlaylist)
      );
  } catch (error) {
    throw new ApiError(500, "Error creating playlist.");
  }
});

// Get all playlists for a specific user
const getUserPlaylists = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!isValidObjectId(userId)) {
    throw new ApiError(400, "Invalid user ID.");
  }

  const playlists = await Playlist.find({ owner: userId });

  if (!playlists.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, "No playlists found for this user."));
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "User playlists retrieved successfully.", playlists)
    );
});

// Get a specific playlist by ID
const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid playlist ID.");
  }

  const playlist = await Playlist.findById(playlistId).populate("videos"); // Populate video details

  if (!playlist) {
    throw new ApiError(404, "Playlist not found.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Playlist retrieved successfully.", playlist));
});

// Add a video to a playlist
const addVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid playlist or video ID.");
  }

  const updatedPlaylist = await Playlist.findByIdAndUpdate(
    playlistId,
    { $addToSet: { videos: videoId } }, // Use $addToSet to avoid duplicates
    { new: true } // Return the updated document
  );

  if (!updatedPlaylist) {
    throw new ApiError(404, "Playlist not found.");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Video added to playlist successfully.",
        updatedPlaylist
      )
    );
});

// Remove a video from a playlist
const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;

  if (!isValidObjectId(playlistId) || !isValidObjectId(videoId)) {
    throw new ApiError(400, "Invalid playlist or video ID.");
  }

  const updatedPlaylist = await Playlist.findByIdAndUpdate(
    playlistId,
    { $pull: { videos: videoId } }, // Use $pull to remove the video
    { new: true } // Return the updated document
  );

  if (!updatedPlaylist) {
    throw new ApiError(404, "Playlist not found.");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Video removed from playlist successfully.",
        updatedPlaylist
      )
    );
});

// Delete a playlist
const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid playlist ID.");
  }

  const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);

  if (!deletedPlaylist) {
    throw new ApiError(404, "Playlist not found.");
  }

  res.status(200).json(new ApiResponse(200, "Playlist deleted successfully."));
});

// Update a playlist
const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.body;

  if (!isValidObjectId(playlistId)) {
    throw new ApiError(400, "Invalid playlist ID.");
  }

  const updatedPlaylist = await Playlist.findByIdAndUpdate(
    playlistId,
    { name, description },
    { new: true, runValidators: true } // Return the updated document and run validation
  );

  if (!updatedPlaylist) {
    throw new ApiError(404, "Playlist not found.");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "Playlist updated successfully.", updatedPlaylist)
    );
});

export {
  createPlaylist,
  getUserPlaylists,
  getPlaylistById,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  deletePlaylist,
  updatePlaylist,
};
