import { Router } from "express";
import {
  deleteVideo,
  getAllVideos,
  getVideoById,
  publishAVideo,
  togglePublishStatus,
  updateVideo,
} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Apply JWT verification middleware to all routes in this file
router.use(verifyJWT);

// Route to get all videos and publish a new video
router
  .route("/")
  .get(getAllVideos) // GET request to retrieve all videos
  .post(
    upload.fields([
      {
        name: "videoFile",
        maxCount: 1,
      },
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    publishAVideo // POST request to publish a new video
  );

// Route to get a specific video by ID, update it, or delete it
router
  .route("/:videoId")
  .get(getVideoById) // GET request to retrieve a specific video by ID
  .delete(deleteVideo) // DELETE request to remove a specific video
  .patch(upload.single("thumbnail"), updateVideo); // PATCH request to update video details

// Route to toggle the publish status of a video
router.route("/toggle/publish/:videoId").patch(togglePublishStatus); // PATCH request to toggle publish status

export default router;
