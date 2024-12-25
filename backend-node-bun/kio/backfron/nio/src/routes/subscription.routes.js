import { Router } from "express";
import {
  getSubscribedChannels,
  getUserChannelSubscribers,
  toggleSubscription,
} from "../controllers/subscription.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Apply JWT verification middleware to all routes in this file
router.use(verifyJWT);

// Route to get subscribed channels for a user
router
  .route("/c/:channelId") // Route for channel subscriptions
  .get(getSubscribedChannels) // GET request to retrieve subscribers of the channel
  .post(toggleSubscription); // POST request to toggle subscription to the channel

// Route to get subscribers of a specific channel
router.route("/u/:subscriberId").get(getUserChannelSubscribers); // GET request to retrieve subscribers for the specified user

export default router;
