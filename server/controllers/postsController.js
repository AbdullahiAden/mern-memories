const asyncHandler = require("express-async-handler");

const getPosts = asyncHandler(async (req, res) => {
  res.status(200).send("all posts");
});
const createPost = asyncHandler(async (req, res) => {
  res.status(200).send("all posts");
});

module.exports = {
  getPosts,
  createPost,
};
