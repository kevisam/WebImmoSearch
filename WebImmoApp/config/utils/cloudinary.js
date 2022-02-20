const cloudinary = require("cloudinary");
const CLOUD_NAME = require('../keys').cloudinary_cloud_name;
const API_KEY = require('../keys').cloudinary_API_key;
const API_SECRET = require('../keys').cloudinary_API_secret;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
   });
   module.exports = cloudinary;