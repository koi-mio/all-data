import mongoose from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getVideoComments = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  const aggregateQuery = Comment.aggregate([
    { $match: { video: mongoose.Types.ObjectId(videoId) } },
    { $sort: { createdAt: -1 } }, 
  ]);

  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  const comments = await Comment.aggregatePaginate(aggregateQuery, options);

  if (!comments) {
    throw new ApiError(404, "No comments found for this video.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Comments retrieved successfully.", comments));
});

// Controller to add a new comment
const addComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const { videoId } = req.params;
  const ownerId = req.user._id; // Assuming user ID is available in req.user

  const newComment = new Comment({
    content,
    video: videoId,
    owner: ownerId,
  });

  const savedComment = await newComment.save();

  res
    .status(201)
    .json(new ApiResponse(201, "Comment added successfully.", savedComment));
});

// Controller to update an existing comment
const updateComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { content },
    { new: true, runValidators: true } // Return the updated document and run validation
  );

  if (!updatedComment) {
    throw new ApiError(404, "Comment not found.");
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, "Comment updated successfully.", updatedComment)
    );
});

// Controller to delete a comment
const deleteComment = asyncHandler(async (req, res) => {
  const { commentId } = req.params;

  const deletedComment = await Comment.findByIdAndDelete(commentId);

  if (!deletedComment) {
    throw new ApiError(404, "Comment not found.");
  }

  res.status(200).json(new ApiResponse(200, "Comment deleted successfully."));
});

export { getVideoComments, addComment, updateComment, deleteComment };
