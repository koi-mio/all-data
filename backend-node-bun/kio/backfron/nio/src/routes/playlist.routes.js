import { Router } from "express";
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylistById,
  getUserPlaylists,
  removeVideoFromPlaylist,
  updatePlaylist,
} from "../controllers/playlist.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Apply JWT verification middleware to all routes in this file
router.use(verifyJWT);

// Route to create a new playlist
router.route("/").post(createPlaylist);

// Routes for specific playlist operations
router
  .route("/:playlistId")
  .get(getPlaylistById) // Get a specific playlist by ID
  .patch(updatePlaylist) // Update a specific playlist
  .delete(deletePlaylist); // Delete a specific playlist

// Routes to add or remove videos from a playlist
router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist); // Add a video to a playlist
router.route("/remove/:videoId/:playlistId").patch(removeVideoFromPlaylist); // Remove a video from a playlist

// Route to get all playlists for a specific user
router.route("/user/:userId").get(getUserPlaylists); // Get playlists for a user

export default router;
