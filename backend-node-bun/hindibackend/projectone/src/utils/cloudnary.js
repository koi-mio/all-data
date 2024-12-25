import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File is uploaded on Cloudinary.......", response.url);
    return response.secure_url;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.error("Error uploading file to Cloudinary:", error);
    return null;
  }
};

(async function () {
  try {
    const uploadResult = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
      {
        public_id: "shoes",
      }
    );
    console.log(uploadResult);

    const optimizeUrl = cloudinary.url("shoes", {
      fetch_format: "auto",
      quality: "auto",
    });
    console.log("Optimized URL:", optimizeUrl);

    const autoCropUrl = cloudinary.url("shoes", {
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });
    console.log("Auto Crop URL:", autoCropUrl);
  } catch (error) {
    console.error("Error in IIFE:", error);
  }
})();

export { uploadOnCloudinary };
