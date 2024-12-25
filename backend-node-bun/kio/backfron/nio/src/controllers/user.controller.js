import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, fullName, email, password } = req.body;
  console.log(
    `Email: ${email} || UserName: ${username} || FullName: ${fullName} || Password: ${password}`
  );

  if ([fullName, email, username, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required.");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(400, "User already exists.");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Please upload an avatar.");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = coverImageLocalPath
    ? await uploadOnCloudinary(coverImageLocalPath)
    : null;

  if (!avatar) {
    throw new ApiError(400, "Avatar upload failed.");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong. User not found.");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, "User registered successfully.", createdUser));
});

console.log("registerUser log:", registerUser);

const loginUser = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;
  if (!username || !email) {
    throw new ApiError(400, "Please provide username and email.");
  }
  const user = await User.findOne({ $or: [{ username }, { email }] });

  if (!user) {
    throw new ApiError(404, "Invalid credentials.");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials.");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken ", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        " User logged In successfully "
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $set: { refreshToken: undefined } },
    { new: true }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, " user is logged out bro "));
});

console.log("login log:", loginUser);

const refreshAccessToken = asyncHandler(async (res, req) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  if (incomingRefreshToken) {
    throw new ApiError(401, " unauthorized request .... ");
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, " unauthorized request .... ");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, " unauthorized refresh request .... ");
    }
    const options = {
      httpOnly: true,
      secure: true,
    };
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    return res
      .status(200)
      .cookie("accessToken ", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRrefreshToken },
          "access token  is tokeni refresh token is generated "
        )
      );
  } catch (error) {
    throw new ApiError(
      401,
      error?.message || " unauthorized refresh request .... "
    );
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(401, " old password is incorrect ");
  }
  user.password = newPassword;
  user.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(
      new ApiResponse(200, { message: " password is changed successfully " })
    );
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(200, req.user, " current user fectched successfully ....... ");
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  const { email, fullName } = req.body;
  if (!fullName || !email) {
    throw new ApiError(400, "All fields are required bro ");
  }
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    { $set: { fullName: fullName, email: email } },
    { new: true }
  ).select("-password");
  return res.status(200).json(
    new ApiResponse(200, {
      message: " account details updated successfully ",
    })
  );
});

const updateUserAvatar = asyncHandler(async (req, res) => {
  const avaterLocalPath = req.file?.path;
  if (!avaterLocalPath) {
    throw new ApiError(400, " avatar is required bro ");
  }
  const avatar = await uploadOnCloudinary(avaterLocalPath);
  if (!avatar.url) {
    throw new ApiError(400, " avatar upload failed ");
  }
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    { $set: { avatar: avatar.url } },
    { new: true }
  ).select("-password");
  return res.status(200).json(
    new ApiResponse(200, {
      message: " avatar updated successfully ",
    })
  );
});

const UpdateUserCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file?.path;
  if (!coverImageLocalPath) {
    throw new ApiError(400, " CoverImage browser is required bro ");
  }
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!coverImage.url) {
    throw new ApiError(400, " CoverImage browser upload failed ");
  }
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    { $set: { coverImage: coverImage.url } },
    { new: true }
  ).select("-password");
  return res.status(200).json(
    new ApiResponse(200, {
      message: " CoverImage browser updated successfully ",
    })
  );
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
  const { username } = await User.findById(req.params.userId).select(
    "-password"
  );

  if (!username?.trim()) {
    throw new ApiError(400, "Username is missing ..........");
  }
  const channel = await User.aggregate([
    {
      $match: {
        username: username?.toLowerCase(),
      },
    },
    {
      $lookup: {
        from: "Subscription",
        localField: "_id",
        foreignField: "channel",
        as: "subscribers",
      },
    },
    {
      $lookup: {
        from: "Subscription",
        localField: "_id",
        foreignField: "user",
        as: "subscribedTo",
      },
    },
    {
      $addFields: {
        subscribersCount: {
          $size: "$subscribers",
        },
        channelSubscribedToCount: {
          $size: "$subscribedTo",
        },
        isSubscribed: {
          $conf: {
            if: { $in: [req.user?._id, "$subscribers.subscriber"] },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      $project: {
        fullName: 1,
        username: 1,
        subscribersCount: 1,
        channelSubscribedToCount: 1,
        isSubscribed: 1,
        avatar: 1,
        coverImage: 1,
        email: 1,
      },
    },
  ]);
  console.log(channel);
  if (!channel?.length) {
    throw new ApiError(404, "Channel does not existing in this world .... ");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        channel[0],
        " User Channel feteched successfully ......."
      )
    );
});

const getWatchHistory = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user?._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullName: 1,
                    username: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $addFields: {
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
  ]);
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        user[0].watchHistory,
        "Watch history fetched Successfully ...."
      )
    );
});


export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  UpdateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
};
