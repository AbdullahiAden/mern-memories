const asyncHandler = require("express-async-handler");

const Post = require("../models/postModel");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("please provide a title");
  }
  const post = await Post.create({
    title: req.body.title,
  });
  res.status(200).json(post);
});

module.exports = {
  getPosts,
  createPost,
};
