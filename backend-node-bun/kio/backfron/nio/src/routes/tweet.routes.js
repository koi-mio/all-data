import { Router } from "express";
import {
  createTweet,
  deleteTweet,
  getUserTweets,
  updateTweet,
} from "../controllers/tweet.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Apply JWT verification middleware to all routes in this file
router.use(verifyJWT);

// Route to create a new tweet
router.route("/").post(createTweet);

// Route to get all tweets by a specific user
router.route("/user/:userId").get(getUserTweets);

// Route to update or delete a specific tweet by tweetId
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router;
